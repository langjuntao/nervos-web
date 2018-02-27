import * as React from 'react'
import styled, { injectGlobal, StyledFunction, keyframes } from './styleUtils'
import theme from '../config/theme'

const chartIconOffset = 2

export const ScreenDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => `${props.theme.sizes.screen.blockMaxWidth}rem`};
  width: ${props => props.theme.sizes.screen.blockWidthPercent};
  margin: 0 auto;
  margin-bottom: ${props => `${props.theme.sizes.screen.marginBottom}rem`};
  padding-top: ${props => `${props.theme.sizes.screen.desc.paddingTop}rem`};
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (max-width: 1874px) {
    max-width: none;
    padding: ${props => `${props.theme.sizes.screen.desc.paddingTop}rem 8% 0`};
  }
  @media (max-width: 1440px) {
    max-width: none;
    padding: ${props => `${props.theme.sizes.screen.desc.paddingTop}rem 8% 0`};
  }
  @media (max-width: 1280px) {
    padding-top: ${props =>
    `${props.theme.sizes.screen.desc.paddingTop / 2}rem`};
  }
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

export const SloganContainer = styled.div`
  position: relative;
  padding-left: 0;
  padding-top: ${props =>
    `${props.theme.sizes.slogan.container.paddingTop -
      props.theme.sizes.screen.desc.paddingTop}rem`};
  padding-bottom: ${props =>
    `${props.theme.sizes.slogan.container.paddingBottom}rem`};
  padding-right: ${props =>
    `${props.theme.sizes.slogan.container.paddingRight}rem`};
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: ${props => `${props.theme.sizes.slogan.container.borderWidth}rem`};
    width: ${props => `${props.theme.sizes.slogan.container.borderLength}rem`};
    background-color: ${props => props.theme.colors.plain};
  }
  /* @media (max-width: 1920px) {
    padding-top: ${props =>
    `${(props.theme.sizes.slogan.container.paddingTop -
        props.theme.sizes.screen.desc.paddingTop) *
        0.14}rem`};
  } */
  @media (max-width: 1440px) {
    padding-bottom: 10rem;
  }
  @media (max-width: 1280px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    padding: 0;
    &:after {
      display: none;
    }
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`

export const ScreenTitleContainer = styled.div`
  margin-top: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginTop}rem`};
  margin-bottom: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginBottom}rem`};
  @media (max-width: 1920px) {
    margin-top: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginTop / 2}rem`};
    margin-bottom: ${props =>
    `${props.theme.sizes.screen.titleContainer.marginBottom / 2}rem`};
  }
`

export const Technologies = styled.div`
  display: block;
  margin-left: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
      props.theme.sizes.chart.blockHPadding / 2}rem`};
  margin-right: ${props =>
    `${props.theme.sizes.screen.desc.paddingLeft -
      props.theme.sizes.chart.blockHPadding / 2}rem`};
  @media (max-width: 768px) {
    margin: 0;
  }
`

// interface ITechnology {
//   index: number
// }

// const TechnologyCons: StyledFunction<ITechnology> = styled.div
// export const Technology = TechnologyCons`
//   display: grid;
//   margin-bottom: ${props => `${props.theme.sizes.chart.title.fontSize}rem`};
//   grid-template-columns: 20% auto 20%;
//   grid-template-rows: ${props =>
//     `${props.theme.sizes.chart.title.fontSize * 2}rem auto`};
//   grid-column-gap: 3vw;
//   & > img {
//     grid-column: ${props => (props.index % 2 ? '2/4' : '1/3')};
//     grid-row: 1/3;
//     justify-self: ${props => (props.index % 2 ? 'right' : 'left')}
//   }
//   &>h1{
//     grid-column: ${props => (props.index % 2 ? '1/3' : '2/4')};
//     grid-row: 1/2;
//     justify-self: ${props => (props.index % 2 ? 'right' : 'left')}
//   }
//   & > div {
//     grid-column: ${props => (props.index % 2 ? '1/3' : '2/4')};
//     grid-row: 2/3;
//     justify-self: ${props => (props.index % 2 ? 'left' : 'right')}
//   }
//   @media (max-width: 750px) {
//     display: block;
//     text-align: center;
//     margin-bottom: 25px;
//   }
// `

export const Technology = styled.div`
  position: relative;
  width: 100%;
  /* height: ${props => `${props.theme.sizes.chart.icon.size}rem`}; */
  margin-bottom: ${props => `${props.theme.sizes.chart.icon.size * 0.5}rem`};
  &:last-of-type {
    margin-bottom: 0;
  }
  & img {
    position: absolute;
    /* top: 0; */
    bottom: 0;
  }
  &:nth-of-type(odd) {
    padding-left: ${props =>
    `${chartIconOffset * props.theme.sizes.chart.icon.size}rem`};
    img {
      right: 100%;
      transform: ${props => `translateX(-${(chartIconOffset - 1) * 100}%)`};
    }
    /* h1,
    p {
      padding-left: ${props => `${props.theme.sizes.chart.icon.size / 2}rem`};
    } */
  }
  &:nth-of-type(even) {
    padding-right: ${props =>
    `${chartIconOffset * props.theme.sizes.chart.icon.size}rem`};
    img {
      left: 100%;
      transform: ${props => `translateX(${(chartIconOffset - 1) * 100}%)`};
    }
    /* h1,
    p {
      padding-right: ${props => `${props.theme.sizes.chart.icon.size / 2}rem`};
    } */
  }
  @media (max-width: 768px) {
    padding: 0 !important;
    text-align: center;
    height: auto;
    margin-bottom: ${props => `${props.theme.sizes.chart.title.fontSize}rem`};
    img {
      position: relative;
      right: auto !important;
      left: auto !important;
      transform: none!important;
      margin-bottom: ${props => `${props.theme.sizes.chart.icon.size / 4}rem`};
      margin-top: ${props => `${props.theme.sizes.chart.icon.size / 2}rem`};
    }
    h1,
    p {
      padding-right: ${props =>
    `${props.theme.sizes.colorizedBlock.paddingLeft}rem`};
    }
    h1{
      text-align: left;
    }
  }
`
export const SubscribeButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 120%;
  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    position: absolute;
    width: 3.2rem;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
  }
`

export const MilestoneContainer = styled.div`
  padding-top: ${props =>
    `${props.theme.sizes.history.yearLabel.paddingBottom +
      props.theme.sizes.history.yearLabel.fontSize * 1.4}rem`};
`