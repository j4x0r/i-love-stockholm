import React from 'react';
import ArticleList from "./ArticleList";

export default class Guide extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.articles = [
      {
        id: 1,
        rank: 1,
        title: "Wedholms Fisk",
        summary: "Wedholms Fisk, founded by legendary restaurateur Bengt Wedholm, is one of the few restaurants in Stockholm entirely devoted to seafood.",
        body: "The dishes — a combination of Swedish culinary traditions with new influences and techniques — include such delicacies as fresh oysters with pumpernickel bread and shallot vinaigrette, whole poached sole with trout roe and champagne sauce, and fricassée of turbot, sole, lobster and scallops. Come here for a long lunch and gaze over the ocean views from the restaurant, or for that special occasion you can book the private room for a gourmet feast for up to 12 people.",
        picture: "http://wedholmsfisk.se/sites/wedholmsfisk.se/files/styles/slider_front/public/gallery/33078_0.jpg?itok=U32csyvW"
      },
      {
        id: 2,
        rank: 2,
        title: "Pontus!",
        summary: "Traditional Swedish cuisine with a twist.",
        body: "Pontus’s fun take on gourmet cuisine is highlighted by its decision to include some oriental elements to its layout. There is an Asian-themed bar, an oyster bar and a sushi counter, as the restaurant seeks to provide an innovative menu from its plentiful supply of Swedish seafood.",
        picture: "http://3.bp.blogspot.com/-Ioh4VNlB6Z0/VCalqE_RQbI/AAAAAAAAFcU/JBelSGW1Mh0/s1600/pontus!.jpg"
      },
      {
        id: 3,
        rank: 3,
        title: "Operakällarnen",
        summary: "With its gilded oak paneling, sparkling chandeliers, and impressive geometrical wood-paneled ceiling, Operakällaren’s main dining room is a classic destination for fine cuisine and impeccable service.",
        body: "Serving international haute cuisine by Stefano Catenacci, it has been rewarded five red ‘couvert’ symbols by Michelin, and is a member of the prestigious Les Grandes Tables du Monde/Traditions & Qualité association. Operakällaren’s private dining room, a completely modern affair in white and electric blue, is also worth a visit, if only for its contrast with the main dining room. Hire it out for a trendy dinner party with views over the water.",
        picture: "http://orsjo.se/wp-content/uploads/2013/02/Opera_3.jpg"
      },
      {
        id: 4,
        rank: 4,
        title: "Le Rouge",
        summary: "Three things in particular characterize the food at Le Rouge: personality, tradition and warmth.",
        body: "The comforting flavors of French cuisine, as well as Italian simplicity, feature prominently on the menu, with dishes including turbot à la Tropezienne, a whole fish cooked with olives, capers and tomato, and escalope de veau à l’Italienne, a tender veal escalope served with salsa verde. Design-wise, Le Rouge is reminiscent of turnof- the-century bohemian France; the deep colorpalette, plush textiles and period detail pay tribute to places such as the Moulin Rouge. Private rooms are available, and a great option for a long, festive meal in a sumptuous setting.",
        picture: "http://www.lerouge.se/images/1440/1440x720-startimage.jpg"
      },
      {
        id: 5,
        rank: 5,
        title: "Nook",
        summary: "Nook is a little restaurant on Söder",
        body: "The Battle of Grand Port was a naval battle between frigates from the French Navy and the British Royal Navy, fought in August 1810 to control the harbour of Grand Port on Isle de France (now Mauritius) during the Napoleonic Wars. The British squadron of four frigates sought to blockade the port, but four of the five French ships managed to break past the blockade. They took shelter in a protected anchorage that was only accessible through a series of complicated reefs and sandbanks, requiring an experienced harbour pilot. When the British commander, Samuel Pym, ordered his frigates to attack, they became trapped in the narrow channels of the bay: two were irretrievably grounded, a third was outnumbered and defeated, and a fourth, unable to close within effective gun range, was later seized as it left the harbour. Although the French ships were also badly damaged, the defeat was the worst the Royal Navy suffered during the entire war, and it left the Indian Ocean and its vital trade convoys exposed to attack from Commodore Jacques Hamelin's frigates. In December a strong British battle squadron under Admiral Albemarle Bertie rapidly invaded and subdued Isle de France.",
        picture: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg"
      },
      {
        id: 6,
        rank: 6,
        title: "Shibumi",
        summary: "Lorem ipsum",
        body: "The Battle of Grand Port was a naval battle between frigates from the French Navy and the British Royal Navy, fought in August 1810 to control the harbour of Grand Port on Isle de France (now Mauritius) during the Napoleonic Wars. The British squadron of four frigates sought to blockade the port, but four of the five French ships managed to break past the blockade. They took shelter in a protected anchorage that was only accessible through a series of complicated reefs and sandbanks, requiring an experienced harbour pilot. When the British commander, Samuel Pym, ordered his frigates to attack, they became trapped in the narrow channels of the bay: two were irretrievably grounded, a third was outnumbered and defeated, and a fourth, unable to close within effective gun range, was later seized as it left the harbour. Although the French ships were also badly damaged, the defeat was the worst the Royal Navy suffered during the entire war, and it left the Indian Ocean and its vital trade convoys exposed to attack from Commodore Jacques Hamelin's frigates. In December a strong British battle squadron under Admiral Albemarle Bertie rapidly invaded and subdued Isle de France.",
        picture: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg"
      }
    ];
  }

  render() {
    return (
      <div>
        <ArticleList articles={ this.articles } />
      </div>
    );
  }
};

