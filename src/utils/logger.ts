const logger = (() => {
    const isDev = process.env.NODE_ENV !== 'production';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const print = (type: 'info' | 'warn' | 'error' | 'trace' | 'debug', messages: any) => {
        if (isDev) {
            switch (type) {
                case 'info':
                    console.info('%c INFO:', 'background: blue; color: white;', messages);
                    break;
                case 'warn':
                    console.warn('%c WARN:', 'background: orange; color: white;', messages);
                    break;
                case 'error':
                    console.error('%c ERROR:', 'background: red; color: white;', messages);
                    break;
                case 'trace':
                    console.trace('%c TRACE:', 'background: grey; color: black;', messages);
                    break;
                case 'debug':
                default:
                    console.log('%c DEBUG:', 'background: green; color: white;', messages);
            }
        }
    };

    return {
        debug: print.bind(null, 'debug'),
        info: print.bind(null, 'info'),
        warn: print.bind(null, 'warn'),
        error: print.bind(null, 'error'),
        trace: print.bind(null, 'trace'),
    };
})();

export default logger;