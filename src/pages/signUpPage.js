import React from 'react';
import Link from 'next/link';


function signUpPage() {
  return (
    <div>
      <h3>This is my SignUp Page</h3>
      <form>
        <input type="text" name="username" value="" placeholder="username" />
        &nbsp; &nbsp;
        <input type="text" name="password" value="" placeholder="password"/>
        <br />
        <br />
        <input type="text" name="firstName" value="" placeholder="first"/>
        &nbsp; &nbsp;
        <input type="text" name="lastName" value="" placeholder="last"/>
        <br />
        <br />
        <input type="text" name="password" value="" placeholder="email"/>
        &nbsp; &nbsp;
        <input type="text" name="password" value="" placeholder="phone"/>
        <br />
        <br />
        <button>Submit</button>   &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="/signInPage">
          <button >Already have an account</button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
}

export default signUpPage;
