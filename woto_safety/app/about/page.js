{/* Portrait Founder Reel Player Section */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex justify-center"
>
  <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-black">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      className="w-full h-full object-cover cursor-pointer"
      onClick={togglePlay}
    >
      <source
        src="https://twb1nsdhwc0tqch8.public.blob.vercel-storage.com/IMG_9112.MOV"
        type="video/mp4"
      />
    </video>

    {/* Top Info Tag & Mute Badge */}
    <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20 pointer-events-none">
      <div className="text-white drop-shadow-md space-y-0.5">
        <h3 className="font-extrabold text-sm sm:text-base tracking-wide leading-tight">
          Nishant Chaudhary
        </h3>
        <p className="text-[10px] font-semibold tracking-wider text-gray-300 uppercase">
          Founder
        </p>
      </div>

      {/* Tap to Unmute Overlay pill (shows when muted) */}
      {isMuted && (
        <button
          onClick={toggleMute}
          className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg hover:bg-black/80 transition-all"
        >
          <VolumeX className="w-3.5 h-3.5" />
          <span>Tap to Unmute</span>
        </button>
      )}
    </div>

    {/* Floating Glassmorphic Control Bar at Bottom */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between w-[85%] px-4 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
      <button
        onClick={togglePlay}
        className="p-1.5 rounded-full text-white hover:bg-white/20 transition-all"
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 fill-white" />
        ) : (
          <Play className="w-5 h-5 fill-white" />
        )}
      </button>

      <button
        onClick={toggleMute}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white hover:bg-white/20 transition-all text-xs font-semibold uppercase tracking-wider"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4" />
            <span>Mute</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            <span>Unmute</span>
          </>
        )}
      </button>
    </div>
  </div>
</motion.div>