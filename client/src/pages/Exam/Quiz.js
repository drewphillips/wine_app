export default class Quiz extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          quiz: {},
          index: 0,
          numberOfQuestions: 10,
          score: 0,
          answers: [],
          completed: false
        }
    }
  
  }