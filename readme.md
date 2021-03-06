# About the bug:

Chrome devtools completely fails to break on the first touch event that gets
emitted, and instead breaks on a second, seemingly identical touch event. This
only seems to occur if pointer event listeners are not registered.

# To reproduce the bug:

1. Clone this repo.
2. Install the app with `npm` (I use `express` for quick route establishment).
3. Start the server.
4. Attach a mobile device for USB debugging. I'm not sure if this occurs across
   multiple devices, or just if the device is a Lenovo Tab A10-70F.
5. Visit the server from the mobile device.
6. In `Event Listener Breakpoints` break on `Mouse`, `Pointer`, and `Touch`
   events.
7. Add a breakpoint to the `this.current = event` line in the `Input`
   constructor, if you really want to be satisfied.
8. Add a watch expression for the global `inputs` array.
9. Refresh the page, and make sure that the `inputs` array is empty.
10. Either tap on the page from the device, or simulate a tap with your mouse.
11. Observe that an `Input` instance object has been pushed into the `inputs`
    array, before any of the breakpoints were hit.
    - Also note that the type of the `current` event inside that input is
      `TouchEvent`, and is identical to the event that has triggered the
      breakpoint.
    - If you 'continue' the script, you will observe that the `inputs` array
      will contain, after a single tap, two `Input` instances containing
      seemingly identical `TouchEvent` instances.
12. Observe that if you uncomment the lines adding pointer event listeners, the
    bug does not occur. Devtools correctly breaks on the first input event,
    which will be registered as a `PointerEvent`.

# Details:

* __Desktop PC__:
  * __Chrome version__:
      Chromium 68.0.3440.106 Built on Ubuntu , running on Ubuntu 16.04
  * __Operating System__:
      Linux 4.15.0-33-generic #36~16.04.1-Ubuntu SMP 
      Wed Aug 15 17:21:05 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
* __Mobile device__:
  * __Chrome version__:
      Chrome 68.0.3440.91
  * __Operating System__:
      Android 6.0.0; Lenovo TAB 2 A10-70F Build/MRA58K
  * __Model number__: Lenovo TAB 2 A10-70F
  * __Android version__: 6.0
  * __Android Security patch level__: May 5, 2017
  * __Kernel version__: 3.18.19
  * __Software version__: A10-70F_20170601

