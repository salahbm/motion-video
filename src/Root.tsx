import {Composition} from 'remotion';
import {SilkaIntro} from './SilkaIntro';

const fps = 30;
const durationInFrames = 150;

export const Root = () => (
  <>
    <Composition
      id="SilkaIntroLandscape"
      component={SilkaIntro}
      durationInFrames={durationInFrames}
      fps={fps}
      width={1920}
      height={1080}
    />
    <Composition
      id="SilkaIntroPortrait"
      component={SilkaIntro}
      durationInFrames={durationInFrames}
      fps={fps}
      width={1080}
      height={1920}
    />
  </>
);
