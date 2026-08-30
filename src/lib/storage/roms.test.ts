import { describe, expect, it } from 'bun:test';
import { getRomNameFromSource, normalizeRemoteRomSource } from './roms';

describe('normalizeRemoteRomSource', () => {
    it('should convert GitHub blob URLs to raw URLs', () => {
        expect(normalizeRemoteRomSource('https://github.com/user/repo/blob/main/roms/game.sfc')).toBe(
            'https://raw.githubusercontent.com/user/repo/main/roms/game.sfc',
        );
    });

    it('should reject local filesystem URLs', () => {
        expect(() => normalizeRemoteRomSource('file:///tmp/game.sfc')).toThrow('HTTP or HTTPS');
    });
});

describe('getRomNameFromSource', () => {
    it('should read names from remote and OPFS sources', () => {
        expect(getRomNameFromSource('https://example.com/Aladdin%20(USA).sfc')).toBe('Aladdin (USA).sfc');
        expect(getRomNameFromSource('opfs:/roms/local/id/Aladdin%20(USA).sfc')).toBe('Aladdin (USA).sfc');
    });
});
