import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <p className="mb-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
        Робуксы — это валюта платформы мини игр Roblox, обеспечивающая комфортный геймплей и расширенные возможности для игрока. Что естественно притягивает толпы желающих их приобрести. Сделать это безопасно и без переплат лучше всего на проверенной площадке, которой и является биржа игровых ценностей FunPay. Мы обеспечиваем комфортные условия для торговли робуксами Roblox без посредников, поэтому на нашей торговой площадке всегда присутствует:
      </p>

      <ul className="space-y-1 mb-1">
        <li className="flex items-start">
          <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
          <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Безопасность сделок. Они проходят в три этапа: оплата, получение игровой валюты, подтверждение выполнения заказа.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
          <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Реальный рыночный курс робуксов. Формируется в условиях естественной конкуренции между продавцами.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
          <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Быстрое оформление заказов. Всего за несколько кликов, с оплатой любым удобным для вас способом.</span>
        </li>
      </ul>

      <p className="mb-6 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
        Если же у вас возникнут вопросы, то служба поддержки FunPay ответит на них в любое время суток!
      </p>

      <div className="">
        <div>
          <h3 className="mb-1 text-title" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500' }}>
            Как купить
          </h3>
          <p className="mb-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
            Покупка робуксов осуществляется просто, как мы писали выше, нужно сделать всего три действия:
          </p>
          <ol className="space-y-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
            <li>1. Выбрать предложение, кликнув на него, и находясь на странице оформления заказа, связаться с продавцом.</li>
            <li>2. Оплатить заказ на нужное количество робуксов.</li>
            <li>3. Получить игровую валюту RBX и подтвердить выполнение заказа. После можно оставить отзыв продавцу и оценить его работу.</li>
          </ol>
          <p className="mt-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
            Продавец получит ваши деньги только после того, как вы получите робуксы в Roblox и отправите системе подтверждение о выполнении заказа.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="mb-1 text-title" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500' }}>
            Продавцам
          </h3>
          <p className="mb-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>
            Если вы опытный продавец или начинаете свой путь с нуля — неважно, у вас есть замечательная возможность продать робуксы через FunPay. Чтобы стать продавцом нашей биржи, следуйте следующим принципам:
          </p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
              <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Выставляйте на продажу только ту сумму, что есть у вас в наличии, чтобы вы смогли быстро передать игровую валюту клиенту.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
              <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Вежливо отвечайте на вопросы потенциальных покупателей.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
              <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Ответственно относитесь к своим обязанностям и выполняйте заказы в кратчайшие сроки.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-gray-500"></span>
              <span className="flex-1 text-body" style={{ fontSize: '14px', lineHeight: '20px' }}>Покупатель должен получить столько робуксов, сколько он указал в заказе.</span>
            </li>
          </ul>
          <p className="mt-1 text-body" style={{ fontSize: '14px', lineHeight: '20px', border: 'none' }}>
            И помните, чем больше у вас довольных клиентов, тем выше шанс превратить своё хобби в отличный источник дохода. Присоединяйтесь к FunPay!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection; 