function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const DrumPad = [
{
  "key": "Q",
  "song": "Heater-1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  "key": "W",
  "song": "Heater-2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  "key": "E",
  "song": "Heater-3",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  "key": "A",
  "song": "Heater-4",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  "key": "S",
  "song": "Heater-6",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  "key": "D",
  "song": "Dsc_Oh",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  "key": "Z",
  "song": "Kick_n_Hat",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  "key": "X",
  "song": "RP4_KICK_1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  "key": "C",
  "song": "Cev_H2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



class DrumPads extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeydown",










    e => {
      if (e.keyCode === this.props.id.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.song);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.song);
    });}componentDidMount() {console.log(this.audio);document.addEventListener("keydown", this.handleKeydown);}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeydown);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick }, this.props.id, /*#__PURE__*/

      React.createElement("audio", { id: this.props.id,
        className: "clip",
        src: this.props.url,
        ref: ref => this.audio = ref }))));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "" };

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(title) {
    this.setState({ title });}



  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.title), /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" }, DrumPad.map((i) => /*#__PURE__*/
      React.createElement(DrumPads, {
        id: i.key,
        song: i.song,
        url: i.url,
        handleDisplay: this.handleDisplay })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("root"));