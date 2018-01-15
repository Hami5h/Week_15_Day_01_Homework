import React from 'react';
import FilmList from './FilmList.js';

class FilmBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
          films: [
            {id: 1, title: 'The Commuter', url: 'http://www.imdb.com/showtimes/title/tt1590193?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0FWZ5H9DQ2QDMTF3P60K&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs'},
            {id: 2, title: 'The Greatest Showman', url: 'http://www.imdb.com/title/tt1485796/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=1M29YK84WAE2PW2SDMN4&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t2'},
            {id: 3, title: 'Mollys Game', url: 'http://www.imdb.com/showtimes/title/tt4209788?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0ADAHXY92BMW8RYJMGDH&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'}
          ]
        };

  };

  render() {
    return(
      <div className="film-box">
        <h1>Now Playing (UK Box Office)</h1>
        <FilmList films={this.state.films}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        &nbsp;&nbsp;<a href='http://www.imdb.com/chart/boxoffice?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0ADAHXY92BMW8RYJMGDH&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_hd'>All of this Weeks Showtimes</a>
      </div>
    );
  }

}

export default FilmBox;
