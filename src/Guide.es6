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
        title: "Nook",
        summary: "Lorem ipsum",
        body: "The Battle of Grand Port was a naval battle between frigates from the French Navy and the British Royal Navy, fought in August 1810 to control the harbour of Grand Port on Isle de France (now Mauritius) during the Napoleonic Wars. The British squadron of four frigates sought to blockade the port, but four of the five French ships managed to break past the blockade. They took shelter in a protected anchorage that was only accessible through a series of complicated reefs and sandbanks, requiring an experienced harbour pilot. When the British commander, Samuel Pym, ordered his frigates to attack, they became trapped in the narrow channels of the bay: two were irretrievably grounded, a third was outnumbered and defeated, and a fourth, unable to close within effective gun range, was later seized as it left the harbour. Although the French ships were also badly damaged, the defeat was the worst the Royal Navy suffered during the entire war, and it left the Indian Ocean and its vital trade convoys exposed to attack from Commodore Jacques Hamelin's frigates. In December a strong British battle squadron under Admiral Albemarle Bertie rapidly invaded and subdued Isle de France.",
        picture: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg"
      },
      {
        id: 2,
        rank: 2,
        title: "Shibumi",
        summary: "Lorem ipsum",
        body: "The Battle of Grand Port was a naval battle between frigates from the French Navy and the British Royal Navy, fought in August 1810 to control the harbour of Grand Port on Isle de France (now Mauritius) during the Napoleonic Wars. The British squadron of four frigates sought to blockade the port, but four of the five French ships managed to break past the blockade. They took shelter in a protected anchorage that was only accessible through a series of complicated reefs and sandbanks, requiring an experienced harbour pilot. When the British commander, Samuel Pym, ordered his frigates to attack, they became trapped in the narrow channels of the bay: two were irretrievably grounded, a third was outnumbered and defeated, and a fourth, unable to close within effective gun range, was later seized as it left the harbour. Although the French ships were also badly damaged, the defeat was the worst the Royal Navy suffered during the entire war, and it left the Indian Ocean and its vital trade convoys exposed to attack from Commodore Jacques Hamelin's frigates. In December a strong British battle squadron under Admiral Albemarle Bertie rapidly invaded and subdued Isle de France.",
        picture: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg"
      },
      {
        id: 3,
        rank: 2,
        title: "Shibumi",
        summary: "Lorem ipsum",
        body: "The Battle of Grand Port was a naval battle between frigates from the French Navy and the British Royal Navy, fought in August 1810 to control the harbour of Grand Port on Isle de France (now Mauritius) during the Napoleonic Wars. The British squadron of four frigates sought to blockade the port, but four of the five French ships managed to break past the blockade. They took shelter in a protected anchorage that was only accessible through a series of complicated reefs and sandbanks, requiring an experienced harbour pilot. When the British commander, Samuel Pym, ordered his frigates to attack, they became trapped in the narrow channels of the bay: two were irretrievably grounded, a third was outnumbered and defeated, and a fourth, unable to close within effective gun range, was later seized as it left the harbour. Although the French ships were also badly damaged, the defeat was the worst the Royal Navy suffered during the entire war, and it left the Indian Ocean and its vital trade convoys exposed to attack from Commodore Jacques Hamelin's frigates. In December a strong British battle squadron under Admiral Albemarle Bertie rapidly invaded and subdued Isle de France.",
        picture: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg"
      }
,
      {
        id: 4,
        rank: 2,
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

