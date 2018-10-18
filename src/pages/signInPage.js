import React from 'react';
import Link from 'next/link';

function signInPage() {
  return (
    <div>
    <h4>Welcome Back!</h4>
    <br />
    <form>
      <input type="text" username="username" value="" placeholder="username" />
      &nbsp; &nbsp;
      <input type="text" password="password" value="" placeholder="password"/>
      &nbsp; &nbsp;
      <button>Log in</button>
      &nbsp; &nbsp;
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href='/patientMedicalForm'>
        <button>Forms</button>
      </Link>
    </form>
    </div>
  );
}


export default signInPage;
