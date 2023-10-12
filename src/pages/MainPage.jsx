import React from "react";
import { useState } from "react";
import ScoringCard from "./ScoringCard";
import BatsmanTable from "../components/BatsmanTable";
import ModalBowling from "../components/ModalBowling";
import Header from "../components/Header";
import ThisOver from "../components/ThisOver";
import ScoreButtons from "../components/ScoreButtons";
import AllStats from "./AllStats";
import ModalBatting from "../components/ModalBatting";
import SecondInningModal from "../components/SecondInningModal";
import TargetRuns from "../components/TargetRuns";
import RunRate from "../components/RunRate";
const scorebtn = [
  { stats: "0" },
  { stats: "1" },
  { stats: "2" },
  { stats: "3" },
  { stats: "4" },
  { stats: "5" },
  { stats: "6" },
  { stats: "W" },
  { stats: "WD" },
  { stats: "NB" },
  { stats: "Undo" }
];

function MainPage(props) {
  // ball by ball score in overs
  const [ballByBallScore, setBallByBallScore] = useState([]);
  //if nb or wd click then add runs
  const [ballByBallNB, setBallByBallNB] = useState([]);
  // when NB is clicked then menu come so position set from this where to display that menu
  const [anchorEl, setAnchorEl] = useState(null);

  // whic batsman is facing
  const [checkedBatsman, setCheckedBatsman] = useState("");

  const [
    secondInningsFirstBatsmanName,
    setSecondInningsFirstBatsmanName
  ] = useState("");
  const [
    secondInningsSecondBatsmanName,
    setSecondInningsSecondBatsmanName
  ] = useState("");
  const [secondInningsBowlerName, setSecondInningsBowlerName] = useState("");
  const [secondInningModal, setSecondInningModal] = useState(false);

  // const [selectedScore, setSelectedScore] = useState(0);
  //when batsman is out
  const [openModal, setOpenModal] = useState(false);
  const [newBatsmanName, setNewBatsmanName] = useState("");
  //when bowler changes
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBowlerName, setNewBowlerName] = useState("");

  // const [matchWinner, setMatchWinner] = useState(null);
  const [secondInnings, setSecondInnings] = useState(false);
  const [seeAllStats, setSeeAllStats] = useState(false);
  //when batsman is out his values saved in this array and update the player from playerdata
  const [savedValues, setSavedValues] = useState([]);
  //to save first inning stats
  const [firstInningData, setfirstInningData] = useState({
    firstInningRuns: 0,
    firstInningOvers: 0,
    firstInningBalls: 0,
    firstInningWickets: 0
  });
  const [firstInningPlayerData, setFirstInningPlayerData] = useState([]);

  const [firstInningBowlerData, setFirstInningBowlerData] = useState([]);

  //only playing batsman
  const [playerFirstData, setPlayerFirstData] = useState([
    {
      name: props.firstBatsman,
      runs: 0,
      balls: 0,
      four: 0,
      six: 0
    },

    {
      name: props.secondBatsman,
      runs: 0,
      balls: 0,
      four: 0,
      six: 0
    }
  ]);

  //current bowler
  const [bowlerData, setBowlerData] = useState([
    {
      name: props.bowler,
      overs: 0,
      balls: 0,
      runs: 0,
      wickets: 0
    }
  ]);

  const totalRuns = bowlerData.reduce(
    (total, bowler) => total + bowler.runs,
    0
  );
  const totalWickets = bowlerData.reduce(
    (total, bowler) => total + bowler.wickets,
    0
  );
  const totalOvers = bowlerData.reduce(
    (total, bowler) => total + bowler.overs,
    0
  );
  const totalBalls = bowlerData.reduce(
    (total, bowler) => total + bowler.balls,
    0
  );
  //handling batsman checkbox
  const handleBatsmanCheckboxChange = (event, batsman) => {
    if (event.target.checked) {
      setCheckedBatsman(batsman);
    } else {
      setCheckedBatsman("");
    }
  };

  //when score button is clicked

  const handleButtonClick = (stats, event) => {
    if (!checkedBatsman) {
      alert("Please select a batsman to face the ball.");
      return;
    }

    // if last was wicket or over was finished so cant do undo
    const lastAction = ballByBallScore[ballByBallScore.length - 1];
    if (stats !== "Undo" || ballByBallScore.length > 0) {
      if (stats !== "Undo" || lastAction !== "W") {
        setBallByBallScore([...ballByBallScore, stats]);
      } else {
        alert("Cannot do 'Undo' if the last ball was a wicket.");
      }
    } else {
      alert("Cannot do 'Undo' if  it's the first ball of the over.");
    }
    const updatedBowlerData = [...bowlerData];
    if (stats !== "WD" && stats !== "NB" && stats !== "Undo") {
      updatedBowlerData[bowlerData.length - 1].balls += 1;
    }

    // Increment overs
    if (updatedBowlerData[bowlerData.length - 1].balls > 5) {
      updatedBowlerData[bowlerData.length - 1].balls = 0;
      updatedBowlerData[bowlerData.length - 1].overs += 1;
      setBallByBallScore([]);
      setIsModalOpen(true);
    }

    // Update runs and wickets for the new bowler if a wicket is taken
    if (stats === "W") {
      updatedBowlerData[bowlerData.length - 1].wickets += 1;
    } else {
      if (!isNaN(Number(stats))) {
        updatedBowlerData[bowlerData.length - 1].runs += Number(stats);
      }
    }
    setBowlerData(updatedBowlerData);

    //this is for total runs

    if (stats === "NB" || stats === "WD") {
      setAnchorEl(event.currentTarget);
      updatedBowlerData[bowlerData.length - 1].runs += 1;
      setBowlerData(updatedBowlerData);

      setBowlerData(updatedBowlerData);
    } else if (stats === "W") {
      setOpenModal(true);

      //if wicket so save the values of out batsman here
      if (
        checkedBatsman === "firstBatsman" ||
        checkedBatsman === "secondBatsman"
      ) {
        const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;

        setSavedValues((prevValues) => [
          ...prevValues,
          {
            savedName: playerFirstData[batsmanIndex].name,
            savedRuns: playerFirstData[batsmanIndex].runs,
            savedBalls: playerFirstData[batsmanIndex].balls,
            savedFour: playerFirstData[batsmanIndex].four,
            savedSix: playerFirstData[batsmanIndex].six
          }
        ]);
      }
    }

    //this is for individual player runs
    if (
      checkedBatsman === "firstBatsman" ||
      checkedBatsman === "secondBatsman"
    ) {
      const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;

      if (stats === "0") {
        playerFirstData[batsmanIndex].balls += 1;
      } else if (stats === "1" || stats === "3" || stats === "5") {
        playerFirstData[batsmanIndex].runs += Number(stats);
        playerFirstData[batsmanIndex].balls += 1;
        setCheckedBatsman(
          checkedBatsman === "firstBatsman" ? "secondBatsman" : "firstBatsman"
        );
      } else if (stats === "2" || stats === "4" || stats === "6") {
        playerFirstData[batsmanIndex].runs += Number(stats);
        playerFirstData[batsmanIndex].balls += 1;
        if (stats === "4") {
          playerFirstData[batsmanIndex].four += 1;
        }
        if (stats === "6") {
          playerFirstData[batsmanIndex].six += 1;
        }
      } else if (stats === "W") {
        playerFirstData[batsmanIndex].balls += 1;
        setNewBatsmanName("");
        setOpenModal(true);
      }
    }

    if (stats === "Undo" && ballByBallScore.length > 0) {
      const updatedBallByBallScore = [...ballByBallScore];
      const undoAction = updatedBallByBallScore.pop();
      if (undoAction !== "W") {
        setBallByBallScore(updatedBallByBallScore);
        const updatedBowlerData = [...bowlerData];

        if (undoAction !== "WD" && undoAction !== "NB") {
          updatedBowlerData[updatedBowlerData.length - 1].balls -= 1;
          updatedBowlerData[updatedBowlerData.length - 1].runs -= Number(
            undoAction
          );

          if (
            checkedBatsman === "firstBatsman" ||
            checkedBatsman === "secondBatsman"
          ) {
            if (
              undoAction === "1" ||
              undoAction === "3" ||
              undoAction === "5"
            ) {
              const batsmanIndex = checkedBatsman === "firstBatsman" ? 1 : 0;
              setCheckedBatsman(
                checkedBatsman === "firstBatsman"
                  ? "secondBatsman"
                  : "firstBatsman"
              );

              playerFirstData[batsmanIndex].balls -= 1;
              playerFirstData[batsmanIndex].runs -= Number(undoAction);
            } else if (
              undoAction === "2" ||
              undoAction === "4" ||
              undoAction === "6"
            ) {
              const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;
              playerFirstData[batsmanIndex].runs -= Number(undoAction);
              playerFirstData[batsmanIndex].balls -= 1;
              if (undoAction === "4") {
                playerFirstData[batsmanIndex].four -= 1;
              }
              if (undoAction === "6") {
                playerFirstData[batsmanIndex].six -= 1;
              }
            }
          }
        } else {
          const lastBallByBallNBRun = Number(ballByBallNB.pop());
          updatedBowlerData[updatedBowlerData.length - 1].runs -=
            lastBallByBallNBRun + 1;

          if (
            checkedBatsman === "firstBatsman" ||
            checkedBatsman === "secondBatsman"
          ) {
            if (
              lastBallByBallNBRun === 1 ||
              lastBallByBallNBRun === 3 ||
              lastBallByBallNBRun === 5
            ) {
              const batsmanIndex = checkedBatsman === "firstBatsman" ? 1 : 0;
              setCheckedBatsman(
                checkedBatsman === "firstBatsman"
                  ? "secondBatsman"
                  : "firstBatsman"
              );

              playerFirstData[batsmanIndex].balls -= 1;
              playerFirstData[batsmanIndex].runs -= Number(lastBallByBallNBRun);
            } else if (
              lastBallByBallNBRun === 2 ||
              lastBallByBallNBRun === 4 ||
              lastBallByBallNBRun === 6
            ) {
              const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;
              playerFirstData[batsmanIndex].runs -= Number(lastBallByBallNBRun);
              playerFirstData[batsmanIndex].balls -= 1;
              if (undoAction === "4") {
                playerFirstData[batsmanIndex].four -= 1;
              }
              if (undoAction === "6") {
                playerFirstData[batsmanIndex].six -= 1;
              }
            }
          }
        }
      }

      setBowlerData(updatedBowlerData);
    }
  };
  //when NB or WD runs is selected
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // when NB or WD ball run is selected
  const handleMenuItemClick = (score) => {
    setAnchorEl(null);
    const updatedBowlerData = [...bowlerData];
    setBallByBallNB([...ballByBallNB, score]);
    if (
      checkedBatsman === "firstBatsman" ||
      checkedBatsman === "secondBatsman"
    ) {
      const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;
      switch (score) {
        case "1":
        case "3":
        case "5":
          updatedBowlerData[bowlerData.length - 1].runs += Number(score);
          playerFirstData[batsmanIndex].runs += Number(score);
          playerFirstData[batsmanIndex].balls += 1;
          setCheckedBatsman(
            checkedBatsman === "firstBatsman" ? "secondBatsman" : "firstBatsman"
          );
          break;
        case "0":
        case "2":
        case "4":
        case "6":
          playerFirstData[batsmanIndex].runs += Number(score);
          playerFirstData[batsmanIndex].balls += 1;
          updatedBowlerData[bowlerData.length - 1].runs += Number(score);
          if (score === "4") {
            playerFirstData[batsmanIndex].four += 1;
          }
          if (score === "6") {
            playerFirstData[batsmanIndex].six += 1;
          }

          break;
        default:
          break;
      }
    }
    setBowlerData(updatedBowlerData);
  };
  // for undo the wicket
  const undoWicket = () => {
    const updatedBallByBallScore = [...ballByBallScore];
    updatedBallByBallScore.pop();
    setBallByBallScore(updatedBallByBallScore);
    const updatedBowlerData = [...bowlerData];
    updatedBowlerData[updatedBowlerData.length - 1].balls -= 1;
    updatedBowlerData[updatedBowlerData.length - 1].wickets -= 1;
    if (
      checkedBatsman === "firstBatsman" ||
      checkedBatsman === "secondBatsman"
    ) {
      const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;

      // Pop the last batsman object from savedValues
      const poppedBatsman = savedValues.pop();

      if (poppedBatsman) {
        // Update the player data for the corresponding batsman
        const updatedPlayerData = [...playerFirstData];
        updatedPlayerData[batsmanIndex] = {
          name: poppedBatsman.savedName,
          runs: poppedBatsman.savedRuns,
          balls: poppedBatsman.savedBalls - 1,
          four: poppedBatsman.savedFour,
          six: poppedBatsman.savedSix
        };

        setPlayerFirstData(updatedPlayerData);
      }
    }
    setOpenModal(false);
  };
  //close modal when new batsman is selected
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //new bowler name

  const handleNewBowlerName = (event) => {
    setNewBowlerName(event.target.value);
  };

  //when new bowler is selected.

  const addNewBowler = () => {
    if (!newBowlerName) {
      alert("Bowler name is required.");
      return;
    }
    const activeBowlerIndex = bowlerData.findIndex(
      (b) => b.name === newBowlerName
    );

    if (activeBowlerIndex !== -1) {
      const existingBowler = bowlerData[activeBowlerIndex];
      const updatedBowlerData = bowlerData.filter(
        (b, index) => index !== activeBowlerIndex
      );

      setBowlerData([
        ...updatedBowlerData,
        {
          name: newBowlerName,
          overs: existingBowler.overs,
          balls: existingBowler.balls,
          runs: existingBowler.runs,
          wickets: existingBowler.wickets
        }
      ]);
    } else {
      setBowlerData((prevData) => [
        ...prevData,
        {
          name: newBowlerName,
          overs: 0,
          balls: 0,
          runs: 0,
          wickets: 0
        }
      ]);
    }

    setIsModalOpen(false);
    setNewBowlerName("");
  };

  //for secondd innings
  const handleSecondInningModal = () => {
    setSecondInningModal(false);
  };
  const handleSecondInnings = () => {
    const firstbatsman = savedValues.map((item) => ({
      name: item.savedName,
      runs: item.savedRuns,
      balls: item.savedBalls,
      four: item.savedFour,
      six: item.savedSix
    }));

    const playingFirstBatsman = playerFirstData.map((item) => ({
      name: item.name,
      runs: item.runs,
      balls: item.balls,
      four: item.four,
      six: item.six
    }));
    setSecondInnings(true);
    setfirstInningData({
      firstInningRuns: totalRuns,
      firstInningOvers: totalOvers,
      firstInningBalls: totalBalls,
      firstInningWickets: totalWickets
    });
    setSecondInningModal(true);
    setOpenModal(false);
    setFirstInningPlayerData([...firstbatsman, ...playingFirstBatsman]);
    setFirstInningBowlerData([...bowlerData]);
    setPlayerFirstData([
      {
        name: "",
        runs: 0,
        balls: 0,
        four: 0,
        six: 0
      },
      {
        name: "",
        runs: 0,
        balls: 0,
        four: 0,
        six: 0
      }
    ]);

    setBowlerData([
      {
        name: "",
        overs: 0,
        balls: 0,
        runs: 0,
        wickets: 0
      }
    ]);
  };
  //new batsman modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // new batsman name
  const handleNewBatsman = (event) => {
    setNewBatsmanName(event.target.value);
  };
  // add new batsman and update the values of out batsman to  0
  const addNewBatsman = () => {
    if (!newBatsmanName) {
      alert("Batsman name is required.");
      return;
    }
    if (
      checkedBatsman === "firstBatsman" ||
      checkedBatsman === "secondBatsman"
    ) {
      const batsmanIndex = checkedBatsman === "firstBatsman" ? 0 : 1;
      const updatedPlayerData = [...playerFirstData];
      updatedPlayerData[batsmanIndex].name = newBatsmanName;
      updatedPlayerData[batsmanIndex].runs = 0;
      updatedPlayerData[batsmanIndex].balls = 0;
      updatedPlayerData[batsmanIndex].four = 0;
      updatedPlayerData[batsmanIndex].six = 0;

      setPlayerFirstData(updatedPlayerData);
    }

    setNewBatsmanName("");
    setOpenModal(false);
    setIsModalOpen(false);
  };

  //who is winner only when secondinnings is true
  const winner = () => {
    if (secondInnings) {
      if (totalRuns > firstInningData.firstInningRuns) {
        return (
          <p style={{ fontSize: "20px", fontWeight: "800" }}>
            {" "}
            <span style={{ color: "#4791db" }}>
              {" "}
              Team {props.opponentTeamName}{" "}
            </span>{" "}
            wins!
          </p>
        );
      } else if (totalRuns < firstInningData.firstInningRuns) {
        return (
          <p style={{ fontSize: "20px", fontWeight: "800" }}>
            {" "}
            <span style={{ color: "#4791db" }}>
              {" "}
              Team {props.teamName}{" "}
            </span>{" "}
            wins!
          </p>
        );
      } else {
        return <p>No one wins.</p>;
      }
    } else {
      return null; // Return null if it's not the second innings
    }
  };

  //in second innings and the bating side won
  const hasWon = secondInnings && totalRuns > firstInningData.firstInningRuns;

  // if innings finished

  const bowlerContinue = (bowler) => {
    setNewBowlerName(bowler.name);
  };

  const secondbatsman = savedValues.map((item) => ({
    name: item.savedName,
    runs: item.savedRuns,
    balls: item.savedBalls,
    four: item.savedFour,
    six: item.savedSix
  }));

  const playingSecondBatsman = playerFirstData.map((item) => ({
    name: item.name,
    runs: item.runs,
    balls: item.balls,
    four: item.four,
    six: item.six
  }));

  const handleSeeAllStats = () => {
    setSeeAllStats(true);
  };
  if (seeAllStats) {
    return (
      <AllStats
        secondInningPlayerData={[...secondbatsman, ...playingSecondBatsman]}
        secondInningBowlerData={[...bowlerData]}
        firstInningPlayerData={firstInningPlayerData}
        firstInningBowlerData={firstInningBowlerData}
        firstInningData={firstInningData}
        totalBalls={totalBalls}
        totalRuns={totalRuns}
        totalOvers={totalOvers}
        totalWickets={totalWickets}
        teamName={props.teamName}
        opponentTeamName={props.opponentTeamName}
        winner={winner}
        overs={props.overs}
      />
    );
  }
  if (
    totalWickets > 9 ||
    Number(totalOvers) === Number(props.overs) ||
    hasWon
  ) {
    return (
      <ScoringCard
        totalOvers={totalOvers}
        totalBalls={totalBalls}
        totalWickets={totalWickets}
        teamName={props.teamName}
        opponentTeamName={props.opponentTeamName}
        winner={winner}
        handleSecondInnings={handleSecondInnings}
        overs={props.overs}
        runs={totalRuns}
        savedValues={savedValues}
        playerFirstData={playerFirstData}
        secondInnings={secondInnings}
        handleSeeAllStats={handleSeeAllStats}
        bowlerData={bowlerData}
      />
    );
  }

  // WHen second inning is start after modal
  const handleSecondInningStart = () => {
    if (
      !secondInningsFirstBatsmanName ||
      !secondInningsSecondBatsmanName ||
      !secondInningsBowlerName
    ) {
      alert("All fields are required.");
      return;
    }
    setBallByBallScore([]);
    setBallByBallNB([]);
    setCheckedBatsman("");
    setSavedValues([]);
    const updatedPlayerFirstData = [...playerFirstData];
    updatedPlayerFirstData[0].name = secondInningsFirstBatsmanName;
    updatedPlayerFirstData[1].name = secondInningsSecondBatsmanName;
    setPlayerFirstData(updatedPlayerFirstData);

    const updatedBowlerData = [...bowlerData];
    updatedBowlerData[0].name = secondInningsBowlerName;
    setBowlerData(updatedBowlerData);
    setSecondInningModal(false);
    setIsModalOpen(false);
  };
  // FOr calculating Run rates
  const CRR = (totalRuns / (totalOvers + totalBalls / 6)).toFixed(2);
  const RRR =
    (firstInningData.firstInningRuns + 1 - totalRuns) /
    (props.overs * 6 - (totalOvers * 6 + totalBalls));
  return (
    <div className="mainpage">
      {/* Header */}
      <div className="head">
        <Header
          teamName={props.teamName}
          opponentTeamName={props.opponentTeamName}
          secondInnings={secondInnings}
          totalRuns={totalRuns}
          totalWickets={totalWickets}
          totalBalls={totalBalls}
          totalOvers={totalOvers}
          totalOversMatch={props.overs}
        />
      </div>
      {/* For run rate */}
      <RunRate CRR={CRR} secondInnings={secondInnings} RRR={RRR} />

      {/* Batsman Table */}

      <BatsmanTable
        playerData={playerFirstData}
        checkedBatsman={checkedBatsman}
        handleBatsmanCheckboxChange={handleBatsmanCheckboxChange}
      />

      {/* Bowler Modal when over is finished */}
      <ModalBowling
        open={isModalOpen}
        onClose={handleModalClose}
        newBowlerName={newBowlerName}
        handleNewBowlerName={handleNewBowlerName}
        bowlerData={bowlerData}
        bowlerContinue={bowlerContinue}
        addNewBowler={addNewBowler}
        scorebtn={scorebtn}
      />

      {/* Over Score Card */}
      <ThisOver
        currentBowler={bowlerData[bowlerData.length - 1]}
        overScore={ballByBallScore}
        NBScore={ballByBallNB}
      />

      {/* for target runs in second innings */}
      <TargetRuns
        firstInningRuns={firstInningData.firstInningRuns}
        totalRuns={totalRuns}
        totalOvers={totalOvers}
        totalBalls={totalBalls}
        overs={props.overs}
        secondInnings={secondInnings}
      />

      {/* Scoring buttons */}
      <ScoreButtons
        scorebtn={scorebtn}
        handleButtonClick={handleButtonClick}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        handleMenuItemClick={handleMenuItemClick}
      />
      {/* Batting Modal when Batsman is out */}

      <ModalBatting
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        newBatsmanName={newBatsmanName}
        handleNewBatsman={handleNewBatsman}
        addNewBatsman={addNewBatsman}
        undoWicket={undoWicket}
      />
      {/* Modal when Second Inning Start */}

      <SecondInningModal
        secondInningModal={secondInningModal}
        handleSecondInningModal={handleSecondInningModal}
        secondInningsFirstBatsmanName={secondInningsFirstBatsmanName}
        setSecondInningsFirstBatsmanName={setSecondInningsFirstBatsmanName}
        secondInningsSecondBatsmanName={secondInningsSecondBatsmanName}
        setSecondInningsSecondBatsmanName={setSecondInningsSecondBatsmanName}
        secondInningsBowlerName={secondInningsBowlerName}
        setSecondInningsBowlerName={setSecondInningsBowlerName}
        handleSecondInningStart={handleSecondInningStart}
      />
    </div>
  );
}

export default MainPage;
