import React from "react";

function leaderboard(){
    return(
    <div> 
      <div id="header">
        <h1>Ranking</h1>
        <button class="share">
          <i class="ph ph-share-network"></i>
        </button>
      </div>
      <div id="leaderboard">
        <div class="ribbon"></div>
        <table>
          <tr>
            <td class="number">1</td>
            <td class="name">Lee Taeyong</td>
            <td class="points">
              258.244 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
            </td>
          </tr>
          <tr>
            <td class="number">2</td>
            <td class="name">Mark Lee</td>
            <td class="points">258.242</td>
          </tr>
          <tr>
            <td class="number">3</td>
            <td class="name">Xiao Dejun</td>
            <td class="points">258.223</td>
          </tr>
          <tr>
            <td class="number">4</td>
            <td class="name">Qian Kun</td>
            <td class="points">258.212</td>
          </tr>
          <tr>
            <td class="number">5</td>
            <td class="name">Johnny Suh</td>
            <td class="points">258.208</td>
          </tr>
        </table>
        <div id="buttons">
          <button class="exit">Exit</button>
          <button class="continue">Continue</button>
        </div>
      </div>
    </div>
    );
}

export default leaderboard;