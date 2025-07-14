'use client'

import { useState, useEffect, useMemo } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Typography from '@/components/ui/Typography'
import HeroSection from '@/components/sections/HeroSection'
import FiltersSection from '@/components/sections/FiltersSection'
import ResultsSection from '@/components/sections/ResultsSection'
import InfoSection from '@/components/sections/InfoSection'
import { usePrevious } from '@/hooks/usePrevious'
import { 
  mockOffers, 
  gameFilters, 
  categoryFilters, 
  deliveryOptions, 
  sortOptions 
} from '@/data/mockData'

export default function GameMarketplace() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGames, setSelectedGames] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [sortBy, setSortBy] = useState('newest')
  const [sortField, setSortField] = useState<'availability' | 'price'>()
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [itemsToShow, setItemsToShow] = useState(6)
  
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)
  const [fastDelivery, setFastDelivery] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState('')

  const [isTableTransitioning, setIsTableTransitioning] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSort = (field: 'availability' | 'price', direction: 'asc' | 'desc') => {
    setIsTableTransitioning(true)
    
    setTimeout(() => {
      setSortField(field)
      setSortDirection(direction)
      
      if (field === 'price') {
        setSortBy(direction === 'asc' ? 'price_asc' : 'price_desc')
      }
      
      setIsTableTransitioning(false)
    }, 300)
  }

  const handleSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy)
    
    setIsTableTransitioning(true)
    
    setTimeout(() => {
      switch(newSortBy) {
        case 'price_asc':
          setSortField('price')
          setSortDirection('asc')
          break
        case 'price_desc':
          setSortField('price')
          setSortDirection('desc')
          break
        case 'newest':
        case 'rating':
        default:
          setSortField(undefined)
          setSortDirection('asc')
          break
      }
      
      setIsTableTransitioning(false)
    }, 300)
  }

  const handleLoadMore = () => {
    if (hasMoreOffers) {
      setItemsToShow(prev => prev + 6)
    } else {
      setItemsToShow(6)
    }
  }

  const handleGameToggle = (gameName: string) => {
    setSelectedGames(prev => 
      prev.includes(gameName) 
        ? prev.filter(g => g !== gameName)
        : [...prev, gameName]
    )
  }

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategory(categoryName)
  }

  const filteredOffers = mockOffers.filter(offer => {
    if (showOnlyAvailable && offer.availability === 0) return false
    
    if (searchQuery && !offer.description.toLowerCase().includes(searchQuery.toLowerCase())) return false
    
    if (deliveryMethod && offer.deliveryMethod !== deliveryMethod) return false
    
    if (fastDelivery && offer.deliveryMethod !== 'instant') return false
    
    if (selectedGames.length > 0) {
      const matchesGame = selectedGames.some(game => 
        offer.description.toLowerCase().includes(game.toLowerCase())
      )
      if (!matchesGame) return false
    }
    
    if (selectedCategory !== 'Все') {
      if (selectedCategory === 'Предметы' && !offer.description.includes('Предметы')) return false
      if (selectedCategory === 'Услуги' && !offer.description.includes('Услуги')) return false
      if (selectedCategory === 'VIP-сервер' && !offer.description.includes('VIP-сервер')) return false
    }
    
    return true
  })

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (!sortField) {
      switch(sortBy) {
        case 'price_asc':
          return a.price - b.price
        case 'price_desc':
          return b.price - a.price
        case 'rating':
          return b.seller.rating - a.seller.rating
        case 'newest':
        default:
          return b.id.localeCompare(a.id)
      }
    }
    
    if (sortField === 'price') {
      const aPrice = a.price
      const bPrice = b.price
      return sortDirection === 'asc' ? aPrice - bPrice : bPrice - aPrice
    }
    
    if (sortField === 'availability') {
      const aAvail = a.availability === Infinity ? Number.MAX_VALUE : a.availability
      const bAvail = b.availability === Infinity ? Number.MAX_VALUE : b.availability
      return sortDirection === 'asc' ? aAvail - bAvail : bAvail - aAvail
    }
    
    return 0
  })

  const displayedOffers = sortedOffers.slice(0, itemsToShow)
  const hasMoreOffers = sortedOffers.length > itemsToShow

  const filters = useMemo(() => ({
    searchQuery, selectedGames, selectedCategory, deliveryMethod, showOnlyAvailable, fastDelivery
  }), [searchQuery, selectedGames, selectedCategory, deliveryMethod, showOnlyAvailable, fastDelivery]);

  const prevFilters = usePrevious(filters);

  useEffect(() => {
    if (prevFilters === undefined) {
      return;
    }
    
    setIsTableTransitioning(true)
    
    const timer = setTimeout(() => {
      setIsTableTransitioning(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [filters, prevFilters])

  return (
    <main className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[1256px] responsive-container px-16 py-8">
          <div className="bg-white rounded-lg shadow-sm">
            <HeroSection
              gameFilters={gameFilters}
              selectedGames={selectedGames}
              onGameToggle={handleGameToggle}
            />

            <FiltersSection 
              categoryFilters={categoryFilters}
              selectedCategory={selectedCategory}
              onCategoryToggle={handleCategoryToggle}
              deliveryOptions={deliveryOptions}
              deliveryMethod={deliveryMethod}
              onDeliveryMethodChange={setDeliveryMethod}
              showOnlyAvailable={showOnlyAvailable}
              onShowOnlyAvailableChange={setShowOnlyAvailable}
              fastDelivery={fastDelivery}
              onFastDeliveryChange={setFastDelivery}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
            />

            <ResultsSection 
              sortedOffers={sortedOffers}
              displayedOffers={displayedOffers}
              sortOptions={sortOptions}
              sortBy={sortBy}
              onSortByChange={handleSortByChange}
              onLoadMore={handleLoadMore}
              hasMoreOffers={hasMoreOffers}
              onSort={handleSort}
              sortField={sortField}
              sortDirection={sortDirection}
              isTableTransitioning={isTableTransitioning}
            />
            
            <div className="px-16 pb-8 responsive-padding pt-[25px]">
              <InfoSection />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 