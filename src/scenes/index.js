/**
 * 
 */
import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';


import MainScreen from '../pages/MainScreen';
import QustionList from '../pages/QustionList';
import ResultScreen from '../pages/ResultScreen';

export const Scenes = Actions.create(
      <Scene key="root" >
            <Scene key="main" component={ MainScreen } hideNavBar  />
            <Scene key="questionList" component={ QustionList }  />
            <Scene key="resultPage" component={ ResultScreen }  />
      </Scene>
);