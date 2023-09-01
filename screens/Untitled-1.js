import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

// const data = [
//   {
//     name: "Edward W. Appleton, Jr.",
//     id: 1,
//     party: "Unity party",
//     // image: require('../../votewise/assets/images/presidentsimg/edward-appleton.jpg'),
//   },
//   {
//     name: "Allen R Brown",
//     id: 3,
//     party: "CP",
//     // image: require('../../votewise/assets/images/presidentsimg/allen-brown.jpg')
//   },

//   {
//     name: "Alexander Cummings",
//     id: 4,
//     party: "Collaborating Political Parties",
//     // image: require('../../votewise/assets/images/presidentsimg/alex-cummings.jpg')
//   },

//   // {name:"Simeon C. M Freeman",
//   // id: 5,
//   // party: "Movement for Progressive Change",
//   // image: require('../../votewise/assets/images/presidentsimg/simeon-freeman.jpg')

//   // },

//   // {name:"Tiawon Saye Gongole",
//   // id: 6,
//   // party: "Liberia People's Party",
//   // image: require('../../votewise/assets/images/presidentsimg/tiawan-gongloe.jpg')

//   // },

//   // {name:"Lusinee F Kamara",
//   // id: 7,
//   // party: "All Liberia Coalition Party",
//   // image: require('../../votewise/assets/images/presidentsimg/lusinee-kamara.jpg')

//   // },

//   // {name:"David G. B Kiamu",
//   // id: 8,
//   // party: "Democratic People's Party",
//   // image: require('../../votewise/assets/images/presidentsimg/david-kiamu.jpg')
//   // },

//   // {name:"Alexander N Kollie",
//   // id: 9,
//   // party: "Reformer's National Congress ",
//   // image: require('../../votewise/assets/images/presidentsimg/alexander-kollie.jpg')

//   // },

//   // {name:"Sheikh A Kouyateh",
//   // id: 10,
//   // party: "Liberia First movemnet",
//   // image: require('../../votewise/assets/images/presidentsimg/sheikh-kouyateh.jpg')
//   // },

//   // {name:"Bendu Alehma Kromah",
//   // id: 11,
//   // party: "Independent Candidate",
//   // image: require('../../votewise/assets/images/presidentsimg/')

//   // },

//   // {name:"Richard Saye Miller",
//   // id: 12,
//   // party: "Liberians for Prosperity",
//   // image: require('../../votewise/assets/images/presidentsimg/richard-miller.jpg')

//   // },

//   // {name:"Clarence K Monibah",
//   // id: 13,
//   // party: "Liberia National Union",
//   // image: require('../../votewise/assets/images/presidentsimg/clarence-moniba.jpg')

//   // },

//   // {name:"Robert Franz Morris",
//   // id: 14,
//   // party: "Independent Candidate",
//   // image: require('../../votewise/assets/images/presidentsimg/robert-franz-morris.jpg')

//   // },

//   // {name:"Sara Beysolow Nyanti",
//   // id: 15,
//   // party: "Africa Liberation League",
//   // image: require('../../votewise/assets/images/presidentsimg/sara-nyanti.jpg')

//   // },

//   // {name:"William Wiah Tuider",
//   // id: 16,
//   // party: "Democratic National Alliegiance",
//   // image: require('../../votewise/assets/images/presidentsimg/william-tunder.jpg')

//   // },

//   // {name:"Joshua Tor Turner",
//   // id: 17,
//   // party: "New Liberia Party",
//   // image: require('../../votewise/assets/images/presidentsimg/joshua-turner.jpg')

//   // },

//   // {name:"George Mannah Weah",
//   // id: 18,
//   // party: "Congress for Democratic Change",
//   // image: require('../../votewise/assets/images/presidentsimg/george-weah.jpg')

//   // },

//   // {name:"Jeremiah Z Wahpoe",
//   // id: 19,
//   // party: "Vision for Liberia Transformation",
//   // image: require('../../votewise/assets/images/presidentsimg/jeremiah-wahpoe')

//   // },

//   // {name:"Luther N Yorvee",
//   // id: 20,
//   // party: "Liberia Rebuilding Party",
//   // image: require('../../votewise/assets/images/presidentsimg/luther-yorfee.jpg')

//   // },
// ];

// const Item = ({ name, party }) => {
//   <View style={styles.list}>
//     {/* <Image style={styles.image} source={image} /> */}
//     <View>
//       <Text>{name}</Text>
//       <Text>{party}</Text>
//     </View>
//   </View>;
// };

const Data = [
  {
    name: "Joseph Beokia",
    party: "UP",
    id: 1,
    image: require("../assets/images/presidentsimg/joseph-boakai.jpg"),
  },
];

const Item = ({ name, party }) => {
  <View style={styles.list}>
    <Image style={styles.image} source={image} />
    <View>
      <Text>{name}</Text>
      <Text>{party}</Text>
    </View>
  </View>;
};

function Presidents() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList>
          data={Data}
          renderItem=
          {({ item }) => <Item name={item.name} party={item.party} />}
          keyExtractor={(item) => item.id}
        </FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    backgroundColor: "#002368",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    color: "white",
  },
  party: {
    fontSize: 15,
    color: "#c0032c",
  },
  // image:{
  //     width: 60,
  //     height: 60,
  //     borderRadius: 60,
  //     resizeMode: "cover",
  // }
});
export default Presidents;
