import React, { useState } from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar, Divider, Tile } from "react-native-elements";
import Accordion from "react-native-collapsible/Accordion";
import * as Animatable from "react-native-animatable";

interface IHomeScreenProps {
  navigation: any;
}

interface AccordionData {
  id: number;
  title: string;
  avatar_url: string;
  subtitle: string;
}

interface AccordionTile {
  title: string;
  content: string;
  data: AccordionData[];
}

const fakeLists: AccordionTile[] = [
  {
    title: "Meus livros",
    content: "Meu livros favoritos",
    data: [
      {
        id: 10,
        title: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman",
      },
      {
        id: 20,
        title: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman",
      },
    ],
  },
  {
    title: "Os mais lidos",
    content: "Livros mais lidos de todos",
    data: [
      {
        id: 30,
        title: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President",
      },
      {
        id: 40,
        title: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman",
      },
    ],
  },
];

const BooksScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const [activeAccordion, setActiveAccordion] = useState<number[]>([]);

  const updateAccordion = (activeAccordion: number[]) => {
    setActiveAccordion(activeAccordion);
  };

  const renderContent = (
    list: AccordionTile,
    index: number,
    isActive: boolean
  ) => {
    return (
      <>
        <Animatable.View
          duration={300}
          transition="backgroundColor"
          style={{
            backgroundColor: isActive
              ? "rgba(255,255,255,1)"
              : "rgba(245,252,255,1)",
          }}
        >
          {list.data.map((l, i) => (
            <ListItem
              key={i}
              bottomDivider
              onPress={() =>
                navigation.push("BookDetails", {
                  bookId: l.id,
                  title: l.title,
                })
              }
            >
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.title}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </Animatable.View>
      </>
    );
  };

  const renderHeader = (
    section: any,
    index: number,
    isActive: boolean,
    sections: any
  ) => {
    return (
      <Animatable.View duration={300} transition="backgroundColor" style={{}}>
        <Text style={{ fontSize: 35, padding: 10, paddingLeft: 30 }}>
          {section.title}
        </Text>
      </Animatable.View>
    );
  };

  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Tile
        imageSrc={{
          uri:
            "https://uploads.metropoles.com/wp-content/uploads/2020/01/08171741/livros1.jpg",
        }}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      />

      <Text
        style={{
          fontSize: 25,
          marginTop: 20,
          marginLeft: 30,
          color: "#606060",
          fontWeight: "bold",
        }}
      >
        Aplicativo de listar livros, bla bla
      </Text>
      <Accordion
        sections={fakeLists}
        activeSections={activeAccordion}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateAccordion}
      />
      <Divider style={{ marginTop: 20 }} />
    </View>
  );
};

export default BooksScreen;
