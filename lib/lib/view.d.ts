/// <reference types="node" />
import cplayer from './';
import { EventEmitter } from 'events';
export interface ICplayerViewOption {
    element?: Element;
    generateBeforeElement?: boolean;
    deleteElementAfterGenerate?: boolean;
    zoomOutKana?: boolean;
    showPlaylist?: boolean;
    showPlaylistButton?: boolean;
    width?: string;
    size?: string;
    style?: string;
    dark?: boolean;
    big?: boolean;
    dropDownMenuMode?: 'bottom' | 'top' | 'none' | string;
}
export default class cplayerView extends EventEmitter {
    private elementLinks;
    private rootElement;
    private player;
    private dropDownMenuShowInfo;
    private options;
    constructor(player: cplayer, options: ICplayerViewOption);
    getRootElement(): HTMLElement;
    dark(): void;
    big(): void;
    private getPlayListLinks;
    private getElementLinks;
    private setPlayIcon;
    private setProgress;
    private setPoster;
    private __OldVolume;
    private setVolume;
    private setMode;
    showInfo(): void;
    showPlaylist(): void;
    toggleDropDownMenu(): void;
    private setVolumeControllerKeepShow;
    private toggleVolumeControllerKeepShow;
    private removeVolumeControllerKeepShow;
    private __OldLyric;
    private __OldTotalTime;
    private setLyric;
    private updatePlaylist;
    private injectPlayListEventListener;
    private injectEventListener;
    private handlePlaylistchange;
    private updateLyric;
    private handleClickListButton;
    private handleClickModeButton;
    private handleClickPlayList;
    private handleClickPlayButton;
    private handleClickVolumeButton;
    private handleOpenAudio;
    private handleModeChange;
    private handleVolumeChange;
    private handleTimeUpdate;
    private handleClickPrevButton;
    private handleClickNextButton;
    private handlePlayStateChange;
    private handleMouseVolumeController;
    private handleTouchVolumeController;
    private handleAudioElementChange;
    private handleMouseProgress;
    private handleTouchProgress;
    destroy(): void;
}
