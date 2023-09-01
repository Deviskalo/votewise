import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Images } from "../imageFile/GlobalImage";

function HomeScreen() {
  const DATA = [
    {
      title: "Parties",
      number: "46",
    },

    {
      title: "Precincts",
      number: "2,471,617",
    },

    {
      title: "Polling centers",
      number: "2,471,617",
    },

    {
      title: "Voters",
      number: "2,471,617",
    },

    {
      title: "Male",
      number: "2,471,617",
    },

    {
      title: "Female",
      number: "2,471,617",
    },
  ];

  const Item = ({ title, number }) => {
    return (
      <View style={styles.statisticRow}>
        <Text style={styles.statisticHead}>{title}</Text>
        <Text style={styles.statFigure}>{number}</Text>
      </View>
    );
  };
  return (
    <>
      <ScrollView>
        <View style={styles.item}>
          <Image style={styles.image} source={Images.homeImages.flag_chair} />
          <View>
            <Text style={styles.headText}>Liberia Vote Wise</Text>
          </View>
        </View>
        <View>
          <Text style={styles.centerText}>
            Be a part of the <Text style={styles.redText}>Future Liberia </Text>
            we want and dream of
          </Text>
        </View>

        <View style={styles.statistic}>
          {DATA.map((item, index) => (
            <View key={index}>
              <Item title={item.title} number={item.number} />
            </View>
          ))}
        </View>

        <View style={styles.container}>
          <Text style={styles.elecNews}> Recent Election News </Text>
          <Image source={Images.homeImages.election_banner} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginRight: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 147,
    height: 145,
    resizeMode: "cover",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
  headText: {
    fontSize: 20,
    color: "#002368",
    marginTop: 35,
  },
  centerText: {
    fontSize: 25,
    padding: 45,
    color: "#002368",
  },
  redText: {
    color: "#c0032c",
  },
  statistic: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statisticRow: {
    width: 110,
    height: 60,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    // elevation: 4,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    marginBottom: 7,
    backgroundColor: "white",
    padding: 3,
  },
  statisticHead: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    color: "#002368",
    justifyContent: "center",
    textAlign: "center",
  },
  statFigure: {
    fontWeight: "bold",
    color: "#c0032c",
    fontSize: 10,
    textAlign: "center",
  },
  elecNews: {
    fontSize: 20,
    color: "#c0032c",
    fontWeight: "bold",
    marginLeft: 52,
  },
});

export default HomeScreen;
