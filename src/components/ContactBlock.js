import React from 'react';

const contactBlock = () => {
  const identities = ["fashion girl", "snake mom","fake goth", "web developer"];

  let identity = "web developer";

  const show = () => {
    for (let i in identities) {
      console.log(identities[i])
    }
  }

  // (function show() {
  //   for (let i in identities) {
  //     console.log(identities[i]);
  //     setTimeout(show, 3000);
  //   }
  // })();


  return (
    <div>
      <p><a href="mailto:liana.birke@gmail.com" target="_blank">work</a> with me</p>
      <p>view my <a href="" target="_blank">resume</a></p>
      <p><a href="" target="_blank">lifestyle</a> of a {identity}</p>
      <p>view the <a href="//github.com/itsliana/itsliana.github.io" target="_blank">source code</a></p>
    </div>
  );
};

export default contactBlock;