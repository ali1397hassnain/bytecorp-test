import { ArrowControlsStyled} from './arrowStyles';
// import arrow from '../../assets/arrow-down-circle-fill.svg'

export function ArrowControls({ color, OnClickLeft, onClickRight }) {
  return (
    <ArrowControlsStyled color={color}>
      <div>
        <div className='left-arrow'>
          <i
            onClick={OnClickLeft}
            className='bi bi-arrow-down-circle-fill'></i>
        </div>
        <div className='right-arrow'>
          <i
            onClick={onClickRight}
            className='bi bi-arrow-down-circle-fill'></i>
        </div>
      </div>
    </ArrowControlsStyled>
  );
}