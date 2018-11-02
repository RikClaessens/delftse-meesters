import React from 'react';

import Page from './Page';
import HeaderImage from '../assets/images/KapelNieuweKerkDelft-4.jpg';
import Anchor from '../components/Anchor';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

const HomePage = () => (
  <Page
    title="Wereldpremière Delftse Meesters op 11 mei"
    headerImage={HeaderImage}
  >
    <Anchor
      items={['Delftse Meesters', 'Artiesten', 'Kaartverkoop', 'Partners']}
    />
    <div
      style={{
        maxWidth: '60%',
        minWidth: 400,
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <Paragraph
        text="Korte introductie over de de twee festiviteiten van 11 en 25 mei ......
- banner hierboven verspringt tussen de twee plaatjes van de twee activiteiten die wij organiseren, als ze daar op klikken dan komen ze bij de pagina terecht. Bovenaan de pagina staat ook het menu van de website, alleen weet ik niet of deze twee linkjes goed ge- bruiksvriendelijk is.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.od tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit prae- sent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        leftImage={HeaderImage}
      />
      <Paragraph
        text="Korte introductie over de de twee festiviteiten van 11 en 25 mei ......
- banner hierboven verspringt tussen de twee plaatjes van de twee activiteiten die wij organiseren, als ze daar op klikken dan komen ze bij de pagina terecht. Bovenaan de pagina staat ook het menu van de website, alleen weet ik niet of deze twee linkjes goed ge- bruiksvriendelijk is.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.od tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit prae- sent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
      />
      <Paragraph
        text="Korte introductie over de de twee festiviteiten van 11 en 25 mei ......
- banner hierboven verspringt tussen de twee plaatjes van de twee activiteiten die wij organiseren, als ze daar op klikken dan komen ze bij de pagina terecht. Bovenaan de pagina staat ook het menu van de website, alleen weet ik niet of deze twee linkjes goed ge- bruiksvriendelijk is.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.od tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit prae- sent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        rightImage={HeaderImage}
      />
      <Title title="Artiesten" />
    </div>
  </Page>
);

export default HomePage;
