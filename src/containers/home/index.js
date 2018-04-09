import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeRange1,
  changeRange2,
  changeRange3,
  changeRange4,
  changeRange5,
  onMusicEqualizerTypeChanged
} from '../../modules/counter';

import Range from '../../components/range';
import Select from '../../components/select';

import './index.css';

const Home = ({ 
  range1,
  range2,
  range3,
  range4,
  range5,
  isOpen,
  changeRange1,
  changeRange2,
  changeRange3,
  changeRange4,
  changeRange5,
  onMusicEqualizerTypeChanged, }) => (
  <div className="music">
      <div className="sideNote">
        <p>+12 db</p>
        <p>0</p>
        <p>-12 db</p>
      </div>
      <Range
      value={range1}
      footnote="60"
      onRangeChange={changeRange1}
      />
      <Range
      value={range2}
      footnote="310"
      onRangeChange={changeRange2}
      />
      <Range
      value={range3}
      footnote="1K"
      onRangeChange={changeRange3}
      />
      <Range
      value={range4}
      footnote="3K"
      onRangeChange={changeRange4}
      />
      <Range
      value={range5}
      footnote="16K"
      onRangeChange={changeRange5}
      />
      <Select 
      onSelect={onMusicEqualizerTypeChanged}
      isOpen={isOpen}
      />
  </div>
)

const mapStateToProps = state => ({
  range1 : state.counter.range1,
  range2 : state.counter.range2,
  range3 : state.counter.range3,
  range4 : state.counter.range4,
  range5 : state.counter.range5,
  isOpen : state.counter.isEqOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeRange1,
  changeRange2,
  changeRange3,
  changeRange4,
  changeRange5,
  onMusicEqualizerTypeChanged,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)