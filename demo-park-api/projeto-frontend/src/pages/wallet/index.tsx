import React, { useEffect, useState } from 'react';

export function Wallet() {
  const [money, setMoney] = useState<number>(0);

  useEffect(() => {
    fetch('https://api.example.com/user/money')
      .then(response => response.json())
      .then(data => setMoney(data.money))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Wallet</h1>
      <p>Money: {money}</p>
    </div>
  );
}