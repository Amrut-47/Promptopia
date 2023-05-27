import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata =
{
    title: 'Promptopia',
    description:'Discover & share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
      <html lang='en'>
          <body>
              <Provider>
              <div className="main ">
                  <div className="gardient"/>
              </div>
              
              <main className="app bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                  <Nav/>
                  {children}
             </main>
             </Provider>                     
          </body>
          
    </html>
  )
}

export default RootLayout