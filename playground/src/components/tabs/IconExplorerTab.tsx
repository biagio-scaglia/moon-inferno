import React, { useState } from 'react';
import { Stack, Grid, Card, CardHeader, CardBody, Input, CodeBlock } from '@moon-inferno/react';
import {
  SparklesIcon,
  FlameIcon,
  MoonIcon,
  SunIcon,
  TerminalIcon,
  CheckIcon,
  CloseIcon,
  ShieldIcon,
  ZapIcon,
  WarnIcon,
  InfoIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
  SettingsIcon,
  CodeIcon,
  LockIcon,
  UserIcon,
  LayersIcon,
  CpuIcon,
  GamepadIcon,
  SkullIcon,
  CrosshairIcon,
  VolumeIcon,
  VolumeMuteIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  RefreshIcon,
  ExternalLinkIcon,
  CopyIcon,
  TrashIcon,
  FilterIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MenuIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  NpmIcon,
  GlobeIcon,
  RankBronzeIcon,
  RankSilverIcon,
  RankGoldIcon,
  RankDiamondIcon,
  BadgeTagIcon,
  BadgeSemanticIcon,
  BadgeFormIcon,
  BadgeStyleIcon,
  BadgeBoxIcon,
  BadgeFlexboxIcon,
  BadgeGridIcon,
  BadgeInfernoIcon,
  LevelShieldIcon,
  LevelLightningIcon,
  CelebrationIcon,
  TargetIcon,
  MoonLogoIcon,
} from '@moon-inferno/icons';

const ALL_ICONS = [
  { name: 'RankBronzeIcon', Component: RankBronzeIcon },
  { name: 'RankSilverIcon', Component: RankSilverIcon },
  { name: 'RankGoldIcon', Component: RankGoldIcon },
  { name: 'RankDiamondIcon', Component: RankDiamondIcon },
  { name: 'BadgeTagIcon', Component: BadgeTagIcon },
  { name: 'BadgeSemanticIcon', Component: BadgeSemanticIcon },
  { name: 'BadgeFormIcon', Component: BadgeFormIcon },
  { name: 'BadgeStyleIcon', Component: BadgeStyleIcon },
  { name: 'BadgeBoxIcon', Component: BadgeBoxIcon },
  { name: 'BadgeFlexboxIcon', Component: BadgeFlexboxIcon },
  { name: 'BadgeGridIcon', Component: BadgeGridIcon },
  { name: 'BadgeInfernoIcon', Component: BadgeInfernoIcon },
  { name: 'LevelShieldIcon', Component: LevelShieldIcon },
  { name: 'LevelLightningIcon', Component: LevelLightningIcon },
  { name: 'CelebrationIcon', Component: CelebrationIcon },
  { name: 'TargetIcon', Component: TargetIcon },
  { name: 'MoonLogoIcon', Component: MoonLogoIcon },
  { name: 'ReactIcon', Component: ReactIcon },
  { name: 'HtmlIcon', Component: HtmlIcon },
  { name: 'CssIcon', Component: CssIcon },
  { name: 'JsIcon', Component: JsIcon },
  { name: 'TsIcon', Component: TsIcon },
  { name: 'NpmIcon', Component: NpmIcon },
  { name: 'GlobeIcon', Component: GlobeIcon },
  { name: 'FlameIcon', Component: FlameIcon },
  { name: 'MoonIcon', Component: MoonIcon },
  { name: 'SunIcon', Component: SunIcon },
  { name: 'TerminalIcon', Component: TerminalIcon },
  { name: 'CheckIcon', Component: CheckIcon },
  { name: 'CloseIcon', Component: CloseIcon },
  { name: 'ShieldIcon', Component: ShieldIcon },
  { name: 'ZapIcon', Component: ZapIcon },
  { name: 'SparklesIcon', Component: SparklesIcon },
  { name: 'WarnIcon', Component: WarnIcon },
  { name: 'InfoIcon', Component: InfoIcon },
  { name: 'EyeIcon', Component: EyeIcon },
  { name: 'EyeOffIcon', Component: EyeOffIcon },
  { name: 'SearchIcon', Component: SearchIcon },
  { name: 'SettingsIcon', Component: SettingsIcon },
  { name: 'CodeIcon', Component: CodeIcon },
  { name: 'LockIcon', Component: LockIcon },
  { name: 'UserIcon', Component: UserIcon },
  { name: 'LayersIcon', Component: LayersIcon },
  { name: 'CpuIcon', Component: CpuIcon },
  { name: 'GamepadIcon', Component: GamepadIcon },
  { name: 'SkullIcon', Component: SkullIcon },
  { name: 'CrosshairIcon', Component: CrosshairIcon },
  { name: 'VolumeIcon', Component: VolumeIcon },
  { name: 'VolumeMuteIcon', Component: VolumeMuteIcon },
  { name: 'ArrowLeftIcon', Component: ArrowLeftIcon },
  { name: 'ArrowRightIcon', Component: ArrowRightIcon },
  { name: 'ArrowUpIcon', Component: ArrowUpIcon },
  { name: 'ArrowDownIcon', Component: ArrowDownIcon },
  { name: 'RefreshIcon', Component: RefreshIcon },
  { name: 'ExternalLinkIcon', Component: ExternalLinkIcon },
  { name: 'CopyIcon', Component: CopyIcon },
  { name: 'TrashIcon', Component: TrashIcon },
  { name: 'FilterIcon', Component: FilterIcon },
  { name: 'CalendarIcon', Component: CalendarIcon },
  { name: 'ChevronLeftIcon', Component: ChevronLeftIcon },
  { name: 'ChevronRightIcon', Component: ChevronRightIcon },
  { name: 'ChevronDownIcon', Component: ChevronDownIcon },
  { name: 'ChevronUpIcon', Component: ChevronUpIcon },
  { name: 'MenuIcon', Component: MenuIcon },
];

export interface IconExplorerTabProps {
  onCopyIcon: (iconName: string) => void;
}

export const IconExplorerTab: React.FC<IconExplorerTabProps> = ({ onCopyIcon }) => {
  const [iconQuery, setIconQuery] = useState('');

  const filteredIcons = ALL_ICONS.filter((icon) =>
    icon.name.toLowerCase().includes(iconQuery.toLowerCase())
  );

  return (
    <Stack gap="1.5rem">
      <Stack direction="row" justify="between" align="center" wrap gap="1rem">
        <div style={{ maxWidth: '300px', width: '100%' }}>
          <Input
            placeholder="Search vector icons..."
            value={iconQuery}
            onChange={(e) => setIconQuery(e.target.value)}
          />
        </div>
        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC', margin: 0 }}>
          Click any SVG icon to copy JSX tag to clipboard. ({ALL_ICONS.length} available)
        </p>
      </Stack>

      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <SparklesIcon size={18} /> Interactive Icon Hover Effects
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1rem">
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#F8FAFC', fontWeight: 600 }}>
              Pass <code style={{ color: 'var(--mi-color-primary)' }}>hoverEffect=&quot;glow | spin | bounce | pulse | scale&quot;</code> to any vector icon:
            </p>
            <Stack direction="row" gap="1.5rem" wrap align="center">
              <Stack align="center" gap="0.35rem">
                <FlameIcon size={32} color="#FF4D00" hoverEffect="glow" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)', color: '#F8FAFC' }}>glow</span>
              </Stack>
              <Stack align="center" gap="0.35rem">
                <RefreshIcon size={32} color="#00FF66" hoverEffect="spin" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)', color: '#F8FAFC' }}>spin</span>
              </Stack>
              <Stack align="center" gap="0.35rem">
                <ZapIcon size={32} color="#00E5FF" hoverEffect="bounce" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)', color: '#F8FAFC' }}>bounce</span>
              </Stack>
              <Stack align="center" gap="0.35rem">
                <SparklesIcon size={32} color="#FF00A0" hoverEffect="pulse" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)', color: '#F8FAFC' }}>pulse</span>
              </Stack>
              <Stack align="center" gap="0.35rem">
                <GamepadIcon size={32} color="#FFD700" hoverEffect="scale" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)', color: '#F8FAFC' }}>scale</span>
              </Stack>
            </Stack>
            <CodeBlock
              collapsible
              title="FULL COPY-PASTE CODE SNIPPET (ICON HOVER ANIMATIONS)"
              code={`import { FlameIcon, RefreshIcon, ZapIcon, SparklesIcon, GamepadIcon } from '@moon-inferno/icons';

<FlameIcon size={32} hoverEffect="glow" />
<RefreshIcon size={32} hoverEffect="spin" />
<ZapIcon size={32} hoverEffect="bounce" />
<SparklesIcon size={32} hoverEffect="pulse" />
<GamepadIcon size={32} hoverEffect="scale" />`}
            />
          </Stack>
        </CardBody>
      </Card>

      <Grid minChildWidth="120px" gap="1rem">
        {filteredIcons.map(({ name, Component }) => (
          <button
            key={name}
            type="button"
            onClick={() => onCopyIcon(name)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1.25rem 0.5rem',
              backgroundColor: 'var(--mi-color-bg-subtle, #14121A)',
              border: '1px solid var(--mi-color-border, #332D40)',
              borderRadius: 'var(--mi-radius-base, 6px)',
              color: '#F8FAFC',
              cursor: 'pointer',
              fontFamily: 'var(--mi-font-mono)',
              fontSize: '0.75rem',
              transition: 'all 0.15s ease',
              minHeight: '44px',
            }}
          >
            <Component size={28} color="var(--mi-color-primary, #FF4D00)" />
            <span style={{ wordBreak: 'break-word', textAlign: 'center', fontWeight: 600 }}>{name}</span>
          </button>
        ))}
      </Grid>
    </Stack>
  );
};
