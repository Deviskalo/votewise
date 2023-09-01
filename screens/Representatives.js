import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { representatives } from "./data/RepresentativesJson";

function Representatives() {
  const [showArrow, setShowArrow] = useState(false);

  const [selectCounty, setselectCounty] = useState("");

  const countyrep = representatives;
  const repCounties = Object.keys(representatives);

  repCounties.forEach((countyKey) => {
    const districtKeys = Object.keys(representatives[countyKey]);

    // console.log(countyKey);
    // console.log(`Districts: ${districtKeys.join(", ")}`);
  });

  // console.log(countyrep.bomi);

  const toggleDropDown = () => {
    setShowArrow(!showArrow);
  };

  const selectRepCounty = (county) => {
    setselectCounty(county);
    toggleDropDown();
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={toggleDropDown} style={styles.dropDown}>
          <Text style={styles.headerText}>
            {selectCounty || "Select a county"}
          </Text>
          <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showArrow && (
          <View>
            {repCounties.map((ele) => (
              <TouchableOpacity key={ele} onPress={() => selectRepCounty(ele)}>
                <Text style={styles.dropCounties}>{ele}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
 {
     
<View style={styles.container}>

  <FlatList
    data={countyrep[selectCounty]}
    renderItem={({ item }) => {
      return (
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
            <Text style={styles.title}>
              {item.party}
            </Text>
          </View>
        </View>
      );
    }}
    keyExtractor={(item) => item.number}
  />
</View>
}

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  hamburgerIcon: {
    marginHorizontal: 20,
    marginTop: 20,
    color: "#002368",
  },
  headerText: {
    fontSize: 18,
    color: "#002368",
    fontWeight: "bold",
    marginTop: 15,
  },
  dropDown: {
    height: 60,
    backgroundColor: "white",
    paddingLeft: 70,
    display: "flex",
    flexDirection: "row",
  },
});

export default Representatives;
