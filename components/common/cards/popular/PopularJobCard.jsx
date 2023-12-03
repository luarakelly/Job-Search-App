import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import {checkImageURL} from '../../../../utils'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={()=>{handleCardPress(item)}}
    >
      <TouchableOpacity
      style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{uri:checkImageURL(item.employer_logo)
          ? item.employer_logo
          : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
      style={styles.companyName}
      numberOfLines={1}
      >
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard

/*
Each filter corresponds to a tab in the top filters tab bar as seen on https://google.com/search?gl=us&ibp=htl;jobs&q=marketing+in+texas.

Supported search filters and their corresponding tabs:

    job_titles - Job title (Title tab).
    company_types - Job title (Company type tab).
    employers - Employers (Employer tab).
    date_posted - Date posted (Date posted tab).
    employment_types - Employment type (Type tab).
    job_requirements - Job requirements (Requirements tab).
    [Deprecated] categories - Employer business categories (Categories tab).

Job Details
Get all job details by id. Details including all job details returned by the Search endpoint in addition to employer reviews, additional application options / links, and estimated salaries for similar jobs.

Estimated Salary
Get salary/pay estimation for a job title (e.g. Node Developer) around a location (e.g. San Francisco, CA, US). A search radius (km) can be specified (default is 200) - results are returned from within the area defined by location and radius.
*/