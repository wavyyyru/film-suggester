import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particleConfig from './particlesjs-config.json'

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`
export const ParticlesBackground = () => {
  return <StyledParticles params={particleConfig} />
}
