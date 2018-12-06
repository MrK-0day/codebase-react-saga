import React from 'react'
import { BarLoader } from 'react-spinners'

export class LoadingPage extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <div className='loadingPage'>
          <div className='box'>
            <BarLoader
              width={100}
              widthUnit={`vw`}
              height={4}
              heightUnit={`px`}
              loading={!!true}
              color={`#36D7B7`}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
