import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import React, { Component } from 'react';
import Container from '../components/Container';

class NearMe extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  getSubtitle = (location) => {
    let subtitle = '';
    if (location.street_address) {
      subtitle = location.street_address;
    }

    if (location.access_days_time && subtitle.length) {
      subtitle = `${subtitle} - ${location.access_days_time}`;
    } else if (location.access_days_time) {
      subtitle = location.access_days_time;
    }

    return subtitle;
  }

  goToLocationDetails = (loc) => {
    this.props.navigation.navigate('LocationDetails', { location: loc });
  };

  render() {
    const { locations } = this.props.navigation.state.params;
    console.log(this.props.navigation.state.params.locations);

    return (
      <Container scroll>
        <List>
          {
            locations.map((l) => (
              <ListItem
                key={l._id}
                title={l.station_name}
                subtitle={this.getSubtitle(l)}
                onPress={() => this.goToLocationDetails(l)}
              />
            ))
          }
        </List>
      </Container>
    );
  }
}


export default NearMe;
