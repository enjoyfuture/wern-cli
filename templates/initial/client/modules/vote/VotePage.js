import {connect} from 'react-redux';
import {
  fetchTopics, createTopic, enterTopic, incrementCount,
  decrementCount, destroyTopic
} from './action';
import Vote from './components/Vote';

function mapStateToProps(state) {
  const vote = state.get('vote');
  const topics = vote.get('topics');
  const newTopic = vote.get('newTopic');
  return {
    topics,
    newTopic
  };
}

export default connect(mapStateToProps, {
  fetchTopics,
  createTopic,
  enterTopic,
  incrementCount,
  decrementCount,
  destroyTopic
})(Vote);
