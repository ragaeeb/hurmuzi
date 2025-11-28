import type { CoreOption } from './types';

/**
 * Parses the core options string returned by the emulator
 * Format: "key|currentValue; value1|value2|value3\n..."
 */
export function parseCoreOptions(optionsString: string): CoreOption[] {
    if (!optionsString) {
        return [];
    }

    const options: CoreOption[] = [];
    const lines = optionsString.split('\n').filter((line) => line.trim());

    for (const line of lines) {
        const [keyPart, valuesPart] = line.split('; ');
        if (!keyPart || !valuesPart) {
            continue;
        }

        const [key, currentValue] = keyPart.split('|');
        const values = valuesPart.split('|');

        const displayName = key
            .replace(/^snes9x[-_]/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        options.push({
            currentValue: currentValue?.trim() || values[0]?.replace('(Default) ', '').trim(),
            displayName,
            key: key.trim(),
            values: values.map((v) => v.replace('(Default) ', '').trim()),
        });
    }

    return options;
}

/**
 * Filters core options to find sound channel options
 */
export function getSoundChannelOptions(options: CoreOption[]): CoreOption[] {
    return options.filter((opt) => opt.key.match(/snes9x_sndchan_\d/));
}

/**
 * Filters core options to find audio-related options (excluding channel muting)
 */
export function getAudioOptions(options: CoreOption[]): CoreOption[] {
    return options.filter(
        (opt) =>
            (opt.key.toLowerCase().includes('audio') ||
                opt.key.toLowerCase().includes('interpolation') ||
                opt.key.toLowerCase().includes('echo')) &&
            !opt.key.match(/snes9x_sndchan_\d/),
    );
}

/**
 * Creates a fingerprint of the current core state for change detection
 */
export function createCoreStateFingerprint(options: CoreOption[]): string {
    return options.map((o) => `${o.key}:${o.currentValue}`).join(',');
}

/**
 * Validates if a file is a valid SNES ROM
 */
export function isValidRomFile(filename: string): boolean {
    const validExtensions = ['.smc', '.sfc', '.fig', '.swc', '.bs', '.st'];
    const ext = filename.toLowerCase().slice(filename.lastIndexOf('.'));
    return validExtensions.includes(ext);
}

/**
 * Gets the valid SNES ROM extensions as a string
 */
export function getValidRomExtensions(): string {
    return '.smc, .sfc, .fig, .swc, .bs, .st';
}
