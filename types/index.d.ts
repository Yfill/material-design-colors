import Theme from '@yfill/theme';
declare module '@yfill/theme/types/extentions' {
    interface Extentions {
        setMainMDColor(color: string | string[]): Theme;
    }
}
declare class MaterialDesignColors {
    static getColorGroup(color: string): string[];
    static install(theme: Theme, color: string | string[]): void;
    static uninstall(theme: Theme): void;
}
export default MaterialDesignColors;
