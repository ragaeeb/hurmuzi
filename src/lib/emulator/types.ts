// Emulator core types
export interface CoreOption {
    key: string;
    currentValue: string;
    values: string[];
    displayName: string;
}

export interface GameManagerInstance {
    getCoreOptions: () => string;
    setVariable: (option: string, value: string) => void;
    getState?: () => Uint8Array;
    loadState?: (state: Uint8Array) => void;
    restart?: () => void;
}

export interface EmulatorInstance {
    gameManager?: GameManagerInstance;
    setVolume?: (volume: number) => void;
    volume?: number;
    menuOptionChanged?: (option: string, value: string) => void;
    playing?: boolean;
}

export interface IframeWindow extends Window {
    EJS_player: string;
    EJS_core: string;
    EJS_gameUrl: string;
    EJS_pathtodata: string;
    EJS_color: string;
    EJS_startOnLoaded: boolean;
    EJS_emulator: EmulatorInstance | null;
    EJS_onGameStart: () => void;
    __setupComplete?: boolean;
}

// Sound channel types
export interface SnesChannel {
    id: number;
    name: string;
    color: string;
    varKey: string;
}

export const SNES_CHANNELS: SnesChannel[] = [
    { color: '#ef4444', id: 1, name: 'CH 1', varKey: 'snes9x_sndchan_1' },
    { color: '#f97316', id: 2, name: 'CH 2', varKey: 'snes9x_sndchan_2' },
    { color: '#eab308', id: 3, name: 'CH 3', varKey: 'snes9x_sndchan_3' },
    { color: '#22c55e', id: 4, name: 'CH 4', varKey: 'snes9x_sndchan_4' },
    { color: '#06b6d4', id: 5, name: 'CH 5', varKey: 'snes9x_sndchan_5' },
    { color: '#3b82f6', id: 6, name: 'CH 6', varKey: 'snes9x_sndchan_6' },
    { color: '#8b5cf6', id: 7, name: 'CH 7', varKey: 'snes9x_sndchan_7' },
    { color: '#ec4899', id: 8, name: 'CH 8', varKey: 'snes9x_sndchan_8' },
];
