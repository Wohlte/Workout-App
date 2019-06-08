import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import GymCard from './GymCard'
import GymMenu from './GymMenu'

export default class Page extends React.Component {
  render() {
      if (this.props.value === 'Trainers') {
        return (
          <div>
            <TrainersMenu />
            <br />
            <TrainerCard />
          </div>
        );
      } else if (this.props.value === 'Gym') {
          return (
              <div>
                  <GymMenu/>
                  <br/>
                  <GymCard/>
          </div>
          );
      } else {
          return (
              <div>
                  <p>to be implemented</p>
              </div>
          );
      }
  }
}
