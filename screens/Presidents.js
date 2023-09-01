import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    name: "EDWARD W. APPLETON, JR",
    id: 1,
    party: "Grassroots Development Movement",
    image: require("../assets/images/presidentsimg/edward-appleton.png"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville.",
  },
  {
    name: "JOSEPH N. BOAKAI",
    id: 2,
    party: "Unity Party",
    image: require("../assets/images/presidentsimg/joseph-boakai.jpg"),
    bio: "Joseph Boakai was born in the remote village of Worsonga in Foya District, Lofa County,[1] on 30 November 1944. He is married to Kartumu Boakai and they have four children.[2] Boakai is a Baptist and a deacon of the Effort Baptist Church.Active in philanthropic efforts, Boakai supervised and personally financed a 7-mile rural village road construction near Warsonga, Liberia.He is the owner of LUSU Resource Corporation and co-owner of AGROMACHINES Liberia.Boakai has served on many boards, including as chairman of Liberia Finance and Trust Corporation, chairman of the board of Star Radio, member of the board of LOIC, member of the board of the Liberia Baptist Theological Seminary, founding member of Bethesda Christian Mission, founding organizer-African Methodist Episcopal University, founding organizer of the C.W.A. Methodist University,[8] ambassador of the Liberia YMCA, president of LUSU Resource Corporation, and ex-president of the Monrovia Rotary Club.",
  },
  {
    name: "ALLEN R. BROWN, JR",
    id: 3,
    party: "Liberia Restoration Party",
    image: require("../assets/images/presidentsimg/allen-brown.jpg"),
    bio: " Allen is a seasoned business man and innovator. He has over thirty years experience in the insurance, real estate and hospitality industries.He is the former President Director General of Beneficial Life Insurance Cote D’Ivoire now called Prudential Beneficial, a regional life and general insurance company with offices in several Francophone countries.Allen founded Urban Marketing Group, which built the Urban Financial Center, the Urban Plaza Complex, the Urban Chateau Hotel currently named Villa Hotel, the Urban Renaissance Hotel currently named Eco Hotel, and other hotels in Liberia. He is serving on the board of Comprehension Realty, a Liberian owned property management company. He was an advisor at Lokoro Diamonds. Allen is passionate about orphans, education and women’s rights; he continues to champion and support these causes.    ",
  },
  {
    name: "ALEXANDER B. CUMMINGS",
    id: 4,
    party: "Collaborating Political Parties",
    image: require("../assets/images/presidentsimg/alex-cummings.webp"),
    bio: "Alexander Benedict Cummings Jr. (born 7 December 1956) is a Liberian politician, businessman and philanthropist. He is the Standard Bearer of Liberia's Alternative National Congress. Born in Monrovia Liberia, Cummings studied at Cuttington University College in Liberia before leaving for the United States to further his studies at the Northern Illinois University, where he earned a Bachelor of Science degree in Finance and Economics. He earned an MBA in Finance from Clark-Atlanta University.Cummings worked for over 40 years in international business. He retired from Coca-Cola as its Chief Administrator in 2016, after a twenty years long career with the organisation.He currently serves as Chairman of the Cummings Africa Foundation.",
  },
  {
    name: "SIMEON C. M. FREEMAN",
    id: 5,
    party: "Movement For Progressive Change",
    image: require("../assets/images/presidentsimg/simeon-freeman.jpg"),
    bio: "Presidential hopeful Mr. Simeon Freeman over the weekend locked down and demonstrated numerical strength in his hometown, Buchanan, Grand Bassa County.Tens of thousands of women and youths embraced the Movement for Progressive Change (MPC) standard bearer when he visited the city on Saturday, 29 July 2023.His visit was in appreciation of the people and to launch a five-million Liberian dollars women empowerment loan for marketers.The opposition politician launched the loan to beef up the capacity of struggling business women and single mothers in the county.",
  },
  {
    name: "TIAWAN SAYE GONGLOE",
    id: 6,
    party: "Liberian's People's Party",
    image: require("../assets/images/presidentsimg/tiawan-gongloe.jpg"),
    bio: "Cllr. Gongloe is the Managing Partner of Gongloe & Associates, Inc, a law firm that specializes in courtroom trials, preparing articles of incorporation and bylaws and other corporate documents for corporations, and business registration. He has been an orator for human rights day in Liberia many times, the most recent being African Human Rights Day (2016) and International Human Rights Day (2016).In April 2011 chaired a special committee, established by the President to investigate the March 22, 2011 police brutality against students of the G. W. Gibson High School and Tubman High School.",
  },

  {
    name: "LUSINEE F. KAMARA, SR",
    id: 7,
    party: "All Liberia Coalition Party",
    image: require("../assets/images/presidentsimg/lusinee-kamara.jpg"),
    bio: "Kamara is determined to lead Liberia towards modernization, addressing pressing socio-economic needs, instituting crucial institutional reforms, and implementing effective policy measures to combat crime within society. The ALCOP Presidential candidate is committed to revitalizing key sectors such as agriculture, education, and social security, while also spearheading infrastructure improvements to elevate the nation’s standards.",
  },
  {
    name: "DAVID G. B. KIAMU",
    id: 8,
    party: "Democratic People's Party Of Liberia",
    image: require("../assets/images/presidentsimg/david-kiamu.jpg"),
    bio: "He vowed to advocate for the setting up of a Commission on Social Welfare which will provide care for the mentally ill persons across the country, the physically challenged persons and the elderly in society.Commenting on the economy, Rev. Kaimu said Liberia, under his leadership, will move away from an extractive industry system to a production industry system that will create over 100,000 jobs annually and will also decentralize resources collected in the country, but he failed to state how will that be done.According to him, all resources raised in each county, 60 percent of it will be managed by that county, while only 40 percent will go to central government.He further asserted that Liberia under his leadership, corruption crimes court will be established to deal with corruption cases speedily and will also advocate for the removal of all bottlenecks in registration of companies.",
  },
  {
    name: "ALEXANDER N. KOLLIE",
    id: 9,
    party: "Reformers National Congress",
    image: require("../assets/images/presidentsimg/alexander-kollie.jpg"),
    bio: "Dr. Kollie, a career health practitioner, revealed that healthcare, economic stability, and revamping the educational sector are the three most critical issues on their party's manifesto. He emphasized that as a qualified health practitioner, he understands the importance of affordable healthcare for all Liberians, and he knows how to make it workable for everyone. When asked about his credentials and why he deserves the votes of Liberians, he urged voters not to judge him solely on his past achievements but to focus on how his determination can transform the lives of the people.",
  },

  {
    name: "SHEIKH A. KOUYATEH",
    id: 10,
    party: "Liberia First Movement",
    image: require("../assets/images/presidentsimg/sheikh-kouyateh.jpg"),
    bio: "Kouyateh who contested twice for the senatorial seat of Montserrado County and lost both in 2011 and 2017 Presidential and legislative elections respectively has been heavily involved into active activism in Liberia for the past six to seven years.Kouyateh has been seen as a civil rights advocate since the ascendancy of President George Weah to the higher seat of the Land.Kouyateh was among individuals who organized the recent #Fix-The-Country protest that caught the attention of many Liberian both in and out of the country..",
  },
  {
    name: "BENDU ALEHMA KROMAH",
    id: 11,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/alehma-kromah.jpg"),
    bio: "Madam Kromah said she was born in Gbarnga City, Bong County where she grew up and attended schools, including the Cuttington University where she spent her freshman year before transferring to the University of Liberia from where she graduated with a Bachelor’s degree in Economics as major and Mathematics as minor. She also mentioned her academic journey to the United States of America where she obtained her Master’s in Business Administration (MBA) and later on began her work career in the United States as a civil servant in the government of the state of California.",
  },
  {
    name: "RICHARD SAYE MILLER",
    id: 12,
    party: "Liberians For Prosperity",
    image: require("../assets/images/presidentsimg/richard-miller.jpg"),
    bio: "Mr. Saye Miller is one of the newest politicians showcasing his ambition for nation’s highest office in October.The Liberia for Prosperity Party leader said to ensure a better health and education system for the country, his government will increase the budgetary allocations of educational and health of the country and reform the country’s health and educational policies to be on par with other countries around the world. According to him, Liberia is too old for its educational system to be in a deplorable state as it is in now, and he has promised to build new schools and colleges throughout the country and improve the living standard of the Liberian educators.",
  },
  {
    name: "CLARENCE K. MONIBA",
    id: 13,
    party: "Liberian National Union",
    image: require("../assets/images/presidentsimg/clarence-moniba.jpg"),
    bio: "Clarence K. Moniba, Ph.D , is a former Liberian government official. He served as the youngest person in the country’s history to be named Minister of State without Portfolio, as well as the Chairman of the Board of the Liberia Electricity Corporation. He was a Principal Advisor and Project Manager to the President of Liberia and a leading figure on infrastructure development in Liberia from 2014 – 2018. Dr. Moniba at various times also headed the Diaspora Engagement Unit, the Philanthropy Secretariat and the President’s Delivery Unit which oversaw the implementation of priority projects. Moniba in previous roles has worked with the African Development Bank’s High-Level Panel on Post-Conflict & Fragile States, as well as the United Nations Post-2015 Development Agenda.In his appeal to the younger generation, Dr. Moniba said that his age of 43 years was a powerful tool that will propel Liberia into the future. He claimed that the Liberian people should “use my age as proof that there is a new breed of Liberian leaders who will have the energy, the strength, the determination and vision to carry out the transformation of this country – knowing that my future is tied with the millions of other Liberians who are desperate for a better nation because Liberia and all our people deserve better.",
  },
  {
    name: "ROBERT FRANZ MORRIS",
    id: 14,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/robert-franz-morris.jpg"),
    bio: "Born and raised in Margibi County, Robert Morris is the Chief Executive Officer of Phoenix Services, a construction contracting, home building and real estate development firm located in Disco Hill, Liberia.Robert F. Morris He is the former Deputy Managing Director for Administration of the Liberia Airport Authority (LAA)/Roberts International Airport, where he led the effort to upgrade the runway, constructed a new terminal building, installed new lighting and a state-of-the-art instrument landing system.",
  },
  {
    name: "SARA BEYSOLOW NYANTI",
    id: 15,
    party: "African Liberation League",
    image: require("../assets/images/presidentsimg/sara-nyanti.jpg"),
    bio: "Madam Nyanti, a former Deputy Special Representative for the United Nations Mission in South Sudan (UNMISS), who arrived in the country from the sub-region over the weekend told a gathering of supporters that she will focus on providing basic social services for Liberians when elected as President of Liberia.Madam Nyanti said lifting Africa’s oldest republic out of poverty will require the help of all Liberians home and abroad and not just the president of the country as she assured her supporters that she will be committed to reducing poverty in Liberia.",
  },
  {
    name: "WILLIAM WIAH TUIDER",
    id: 16,
    party: "Democratic National Allegiance",
    image: require("../assets/images/presidentsimg/william-tuder.jpg"),
    bio: "Hon. William W. Tuider, a seasoned statesman and grassroots leader, has been entrusted with the DNA’s presidential candidacy. With a focus on transparency, social justice, and economic prosperity, Hon. Tuider aims to unite the nation and bring about positive change for all citizens. Read More Here : Hon. William W. Tuider, a seasoned statesman and grassroots leader, has been entrusted with the DNA’s presidential candidacy. With a focus on transparency, social justice, and economic prosperity, Hon. Tuider aims to unite the nation and bring about positive change for all citizens.",
  },
  {
    name: "JOSHUA TOM TURNER",
    id: 17,
    party: "New Liberia Party (NLP)",
    image: require("../assets/images/presidentsimg/joshua-turner.jpg"),
    bio: "Rev. Dr. Turner vowed to build a diversified economy by adding value to local products through manufacturing.The New Liberia Political Leader also announced the introduction of what he calls ‘Twenty-Six Amazing Programs’ for the country, if elected President of Liberia.The New Liberia Party is one of the newest political institutions of the Opposition Bloc poised to challenge incumbent President George Weah in the ensuing October 10 Presidential Race. Read more here: https://elbcradio.com/2023/07/20/industrialization-is-driving-vision-for-seeking-the-presidency-rev-dr-turner/",
  },
  {
    name: "GEORGE MANNEH WEAH",
    id: 18,
    party: "Coalition for Democratic Change",
    image: require("../assets/images/presidentsimg/george-weah.jpg"),
    bio: "Dr. George Manneh Weah, was born on October 1, 1966, on the Capitol Bypass in Monrovia, Montserrado County, unto the union of Mr. William Tarpeh Weah and Madam Anna Quayeweh Weah (both deceased). He holds ancestry to the Kru and the Bassa ethnic groups. His father hailed from Grand Kru County while his mother hailed from Grand Bassa County. Dr. George Manneh Weah began his political career in 2004. He is the founder of Liberia National Congress Party (LINCP) which later became the formidable Congress for Democratic Change (CDC). Weah contested three elections and won two. He lost the presidential race in the runoff with former President Ellen Johnson-Sirleaf in 2005. In 2014, Weah contested and won the Montserrado County Senatorial by-election. In November 2017, he won the General and Presidential Elections with over 60% of valid votes following a runoff with former vice president, Joseph N. Boakai. Dr. Weah was inaugurated on January 22, 2018.In his first annual message to the National Legislature, President Weah reduced his salary and other benefits by 25% with immediate effect.  According to Article 60 of the Liberian Constitution, salaries of the President and the Vice President are established by the National Legislature and cannot be increased or reduced during the period for which they are elected. However, the President took the action in view of the very rapidly deteriorating economic situation of Liberia.",
  },
  {
    name: "JEREMIAH Z. WHAPOE",
    id: 19,
    party: "Vision for Liberia Transformation",
    image: require("../assets/images/presidentsimg/jeremiah-whapoe.jpg"),
    bio: "Presidential aspirant Dr. Jeremiah Z. Whapoe says, it’s very saddening and frustrating that at 174, Liberia has failed to work in line with her age through wisdom to develop and eliminate poverty, promising that he is ready and prepared to restore and give back to the Liberian people what is rightfully theirs that the locust has stolen.The leader for the Vision for Liberia Transformation (VOLT) notes that at 174 years, Liberia is still not wise enough in making national decisions for positive transformation that will better the lives of its citizens, adding “We are still hiring Ghanaians to plant our light poles and Chinese are still driving trucks in our companies while we have potential Liberians that can do the same job.”",
  },
  {
    name: "LUTHER N. YORFEE",
    id: 20,
    party: "Liberia Rebuilding Party",
    image: require("../assets/images/presidentsimg/luther-yorfee.jpg"),
    bio: "Cllr. Luther N. Yorfee has over 20 years of experience in public service, couple with credible track record of performance in several key functionary of government, including the General Auditing Commission (GAC), Ministry of Foreign Affairs. He holds a BBA Degree in  Accounting, LLB Law Degree and LLM International Business Law Degree, respectively.",
  },
];

const Item = ({ name, party, image, bio }) => (
  <View style={styles.item}>
    <View>
      <Image style={styles.image} source={image} />
    </View>
    <View style={styles.itemTwo}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
    <View>
      <Text>{bio}</Text>
    </View>
  </View>
);

function Presidents() {
  const navigation = useNavigation();
  const onPressCandidate = (item) => {
    navigation.navigate("PresidentsDetails", {
      item,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressCandidate(item)}>
            <Item image={item.image} name={item.name} party={item.party} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    padding: 20,
    backgroundColor: "white",
    marginVertical: 8,
    marginHorizontal: 16,
  },

  itemTwo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    color: "#002368",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover",
  },

  party: {
    color: "#c0032c",
    fontSize: 11,
  },
});

export default Presidents;
