import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { senators } from "./data/SenatorJson";

const SelectCounty = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState("Montserrado");

  // console.log("Counties", Object.keys(senators))

  const countyDrop = senators;
  // console.log(countyDrop.grandKru);

  const counties = Object.keys(senators);

  const toggleDropDown = () => {
    setShowArrow(!showArrow);
  };

  const selectCounty = (county) => {
    setSelectedCounty(county);
    toggleDropDown();
  };

  const navigation = useNavigation();

  const senatorPress = (item) => {
    navigation.navigate("SenatorsDetails", {
      item,
    });
  };

  return (
    <>
      {/* <Text>{selectedCounty || "Counties"}</Text> */}
      <View>
        <TouchableOpacity onPress={toggleDropDown} style={styles.dropDown}>
          <Text style={styles.headerText}>
            {selectedCounty || "Select a county"}
          </Text>
          <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showArrow && (
          <ScrollView style={styles.dropDownCont}>
            <View>
              {counties.map((ele) => (
                <TouchableOpacity key={ele} onPress={() => selectCounty(ele)}>
                  <Text style={styles.dropCounties}>{ele}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </View>

      {
        <View style={styles.container}>
          <FlatList
            data={countyDrop[selectedCounty]}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => senatorPress(item)}>
                  <View style={styles.senatorsOutput}>
                    <View>
                      <Image
                        style={styles.image}
                        source={{
                          uri: item.photo,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={styles.aspirantName}>{item.aspirant}</Text>
                      <Text style={styles.title}>{item.party}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.number}
          />
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },

  hamburgerIcon: {
    marginHorizontal: 10,
    marginTop: 20,
    color: "#002368",
  },
  headerText: {
    fontSize: 18,
    color: "#002368",
    fontWeight: "bold",
    marginTop: 15,
  },

  dropDownCont: {
    marginBottom: 100,
  },
  dropDown: {
    height: 60,
    backgroundColor: "white",
    paddingLeft: 20,
    display: "flex",
    position: "fixed",
    flexDirection: "row",
  },

  dropCounties: {
    color: "#002368",
    borderRadius: 5,
    padding: 10,
    borderStyle: "dashed",
    borderColor: "#002368",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 2,
    paddingLeft: 70,
  },

  senatorsOutput: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    marginVertical: 10,
    marginHorizontal: 11,
    backgroundColor: "white",
  },
  image: {
    margin: 10,
    width: 60,
    height: 60,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 60,
    resizeMode: "cover",
  },

  aspirantName: {
    color: "#002368",
    marginHorizontal: 2,
    marginTop: 20,
    fontSize: 15,
  },

  title: {
    fontSize: 11,
    marginHorizontal: 2,
    color: "#c0032c",
  },
});

export default SelectCounty;
