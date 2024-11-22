import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
