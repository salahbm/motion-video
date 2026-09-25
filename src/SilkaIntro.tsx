import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const SilkaIntro = () => {
  const frame = useCurrentFrame();
  const {width, height, durationInFrames} = useVideoConfig();
  const portrait = height > width;
  const scale = portrait ? 0.78 : 1;
  const reveal = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const textReveal = interpolate(frame, [18, 42], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames - 1], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#f7f6f3',
        color: '#20232a',
        fontFamily: 'Arial, sans-serif',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 30 * scale,
          padding: portrait ? 90 : 60,
        }}
      >
        <Img
          src={staticFile('brand/logo_light.png')}
          style={{
            width: 148 * scale,
            height: 148 * scale,
            objectFit: 'contain',
            opacity: reveal,
            transform: `translateY(${(1 - reveal) * 22}px)`,
          }}
        />
        <div
          style={{
            fontSize: 82 * scale,
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 1,
            opacity: textReveal,
            transform: `translateY(${(1 - textReveal) * 16}px)`,
          }}
        >
          Silka
        </div>
        <div
          style={{
            maxWidth: portrait ? 760 : 1100,
            fontSize: 42 * scale,
            fontWeight: 400,
            lineHeight: 1.3,
            opacity: textReveal,
            transform: `translateY(${(1 - textReveal) * 16}px)`,
          }}
        >
          Prepare stronger bids, together.
        </div>
      </div>
    </AbsoluteFill>
  );
};
