import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import MessageStart from './pages/Messages';
import MessageClientGetNet from './pages/Messages/clientGetNet';
import DataShare from './pages/Messages/dataShare';
import FlowDetails from './pages/Home/flowDetails';
import Loan from './pages/Loan';
import Analyze from './pages/Loan/analyze';
import Pendency from './pages/Loan/pendency';
import Accept from './pages/Loan/accept';
import Fail from './pages/Loan/fail';
import Congratulations from './pages/Loan/congratulations';
import GetCred from './pages/Loan/getCred';
import GetNet from './pages/getnet';
import AcceptSmallerValue from './pages/Loan/acceptSmallerValue';
import Loading from  './pages/loading';
import LoadingApk from  './pages/loading/apk';
import NoClient from  './pages/loading/noClient';
import ResponseFail from  './pages/Loan/responseFail';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{
                backgroundColor: 'white'
            }}}>
                <AppStack.Screen name="GetNet" component={GetNet}/>
                <AppStack.Screen name="LoadingApk" component={LoadingApk}/>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="MessageStart" component={MessageStart}/>
                <AppStack.Screen name="MessageClientGetNet" component={MessageClientGetNet}/>
                <AppStack.Screen name="DataShare" component={DataShare}/>
                <AppStack.Screen name="FlowDetails" component={FlowDetails}/>
                <AppStack.Screen name="Loan" component={Loan}/>
                <AppStack.Screen name="Analyze" component={Analyze}/>
                <AppStack.Screen name="Pendency" component={Pendency}/>
                <AppStack.Screen name="Accept" component={Accept}/>
                <AppStack.Screen name="Fail" component={Fail}/>
                <AppStack.Screen name="Congratulations" component={Congratulations}/>
                <AppStack.Screen name="GetCred" component={GetCred}/>
                <AppStack.Screen name="AcceptSmallerValue" component={AcceptSmallerValue}/>                
                <AppStack.Screen name="Loading" component={Loading}/>
                <AppStack.Screen name="NoClient" component={NoClient}/>
                <AppStack.Screen name="ResponseFail" component={ResponseFail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;