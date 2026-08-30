import pkg from '@/../package.json';

const { version, homepage, author } = pkg;

const versionUrl = `${homepage}/releases/tag/v${version}`;

export const Footer = () => {
    return (
        <footer className="mt-auto w-full border-white/10 border-t bg-[#06060e] py-3.5 backdrop-blur-sm">
            <div className="w-full px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-2.5 text-center sm:flex-row sm:text-left">
                    {/* Author & Version */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span>
                            © {new Date().getFullYear()}{' '}
                            <a
                                href={author.url}
                                className="font-medium text-zinc-300 transition-colors hover:text-cyan-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {author.name}
                            </a>
                        </span>
                        <span className="text-zinc-600">•</span>
                        <a
                            href={versionUrl}
                            className="font-mono text-[11px] text-zinc-500 transition-colors hover:text-zinc-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            v{version}
                        </a>
                    </div>

                    {/* EmulatorJS Attribution & GitHub */}
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                        <span>
                            Powered by{' '}
                            <a
                                href="https://emulatorjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-yellow-400/90 transition-colors hover:text-yellow-300"
                            >
                                EmulatorJS
                            </a>
                        </span>

                        <span className="text-zinc-600">•</span>

                        <a
                            href={homepage}
                            className="group flex items-center gap-1.5 font-medium text-zinc-400 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                        >
                            <svg
                                className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110"
                                viewBox="0 0 24 24"
                            >
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            <span>Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
