import React from 'react';
import Link from 'next/link';

const name = 'Clayton';

function logOutPage() {
  return (
    <div>
    <h3> See you later, {name} </h3>
    <Link href="/">
      <button>Home</button>
    </Link>
    </div>
  );
}


export default logOutPage;
