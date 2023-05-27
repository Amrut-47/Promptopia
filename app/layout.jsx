import '@styles/globals.css';

import Nav from '@components/nav';
import Provider from '@components/provider';

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
              
              <main className="app ">
                  <Nav/>
                  {children}
             </main>
             </Provider>                     
          </body>
          
    </html>
  )
}

export default RootLayout