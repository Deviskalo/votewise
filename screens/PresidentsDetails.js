import { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

function PresidentsDetails({ route }) {
  const [candidateInfo, setCandidateInfo] = useState(route.params.item || null);
  return (
    <>
      <ScrollView>
        <View>
          <View>
            <Image style={styles.image} source={candidateInfo?.image} />
          </View>
          <View style={styles.presidentsInfo}>
            <Text style={styles.aspirantName}>{candidateInfo?.name}</Text>
            <Text style={styles.party}>
              Political Party: {candidateInfo?.party}
            </Text>
            <Text style={styles.bioInfo}>{candidateInfo?.bio}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  presidentsInfo: {
    marginHorizontal: 20,
  },
  image: {
    width: 375,
    height: 450,
  },

  aspirantName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#002368"
  },
  party: {
    color: "#c0032c",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  bioInfo: {
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 20,
  },
});

export default PresidentsDetails;
