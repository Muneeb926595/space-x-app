import gql from 'graphql-tag';

export const ALL_LAUNCH_QUERY = gql`
query LaunchesQuery{
  launches{
    flight_number
    mission_name
    launch_year
    launch_success
  }
}
`;

export const LAUNCH_DETAIL_QUERY = gql`
query LaunchInfo($id: String) {
  launch(id: $id){
    mission_id
    rocket {
      rocket_name
    }
    mission_name
    links {
      flickr_images
      article_link
      video_link
    }
    launch_year
    launch_success
    launch_site {
      site_name_long
    }
    launch_date_local
  }
}
`;

export const ROCKETS_QUERY = gql`
query RocketsQuery{
  rockets{
    rocket_name
    description
    first_flight
    cost_per_launch
    flickr_images
  }
}
`;

export const LAUNCH_PAYLOAD_QUERY = gql`
query PayloadQuery{
  payload(id:"Thaicom 6"){
    payload_id
    manufacturer
    nationality
    orbit
  }
}
`;