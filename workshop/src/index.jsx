import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App firstName="Allen" lastName="Santi" />, root);
}

// const Header = (props) => {
//   const { firstName, lastName } = props;
//   const fullName = firstName + " " + lastName;
//   return (
//     <section>
//       <h1>Hello {fullName}! 🤗</h1>
//     </section>
//   );
// };

// class Header extends React.Component {
//   render() {
//     const { firstName, lastName } = this.props;
//     const fullName = firstName + " " + lastName;
//     return (
//       <section>
//         <h1>Hello {fullName}! 🤗</h1>
//       </section>
//     );
//   }
// }
