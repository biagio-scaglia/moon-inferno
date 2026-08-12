import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  HoloCard,
  MoonSafeGlitch,
  Badge,
  Input,
  Button,
  CodeBlock,
  Grid,
  MoonTypewriterDialogue,
  MoonHealthMeter,
  MoonRPGGrid,
  MoonConsoleLogger,
  useToast,
} from '@moon-inferno/react';
import { FlameIcon, TerminalIcon, ZapIcon, RefreshIcon } from '@moon-inferno/icons';

export const RecipesTab = () => {
  const { addToast } = useToast();

  return (
    <Stack gap="2rem">
      {/* Recipe 1: Web3 Wallet Connect Modal */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <FlameIcon size={18} /> Recipe 1: Cyberpunk Web3 Wallet Connect Screen
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.9rem' }}>
              Production-ready Web3 authentication interface combining HoloCard, GlitchText, StatusBadge, Input, and Button.
            </p>

            <HoloCard style={{ maxWidth: '480px', margin: '0 auto', width: '100%' }}>
              <Stack gap="1.25rem" align="center">
                <MoonSafeGlitch text="WEB3_CYBER_VAULT" as="h3" />
                <Badge variant="inferno" icon={<FlameIcon size={12} />}>MAINNET NODE #01 ONLINE</Badge>
                
                <Input
                  label="ENTER WALLET ADDRESS (0x...)"
                  placeholder="0x7a8B39c...4F2d"
                  style={{ width: '100%' }}
                />

                <Button
                  variant="inferno"
                  leftIcon={<ZapIcon size={16} />}
                  onClick={() => addToast('Wallet Connection Initiated!', { variant: 'inferno' })}
                  style={{ width: '100%' }}
                >
                  CONNECT METAMASK / PHANTOM
                </Button>
              </Stack>
            </HoloCard>

            <CodeBlock filename="CyberpunkWeb3Login.recipe.tsx" code={`import { HoloCard, MoonSafeGlitch, Badge, Input, Button } from '@moon-inferno/react';\n\nexport const CyberpunkWeb3Login = () => (\n  <HoloCard style={{ maxWidth: '480px' }}>\n    <MoonSafeGlitch text="WEB3_CYBER_VAULT" as="h3" />\n    <Badge variant="inferno">MAINNET NODE ONLINE</Badge>\n    <Input label="WALLET ADDRESS" placeholder="0x7a8..." style={{ width: '100%' }} />\n    <Button variant="inferno" style={{ width: '100%' }}>CONNECT WALLET</Button>\n  </HoloCard>\n);`} />
          </Stack>
        </CardBody>
      </Card>

      {/* Recipe 2: Complete RPG Game HUD */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <TerminalIcon size={18} /> Recipe 2: Accessible RPG Game HUD & Subsystem Dashboard
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.9rem' }}>
              Full gaming HUD layout with RPG inventory slot grid, health/mana meters, typewriter speech dialogue, and live CRT logger.
            </p>

            <Stack gap="1.5rem">
              <MoonTypewriterDialogue
                speaker="COMMANDER_ZERO"
                text="Subsystems operational. Prepare to engage enemy node matrix."
                speed={20}
              />

              <Grid minChildWidth="280px" gap="1.25rem">
                <Stack gap="1rem">
                  <MoonHealthMeter type="health" value={92} max={100} label="HP (PLAYER HEALTH)" />
                  <MoonHealthMeter type="mana" value={55} max={100} label="MP (MANA ENERGY)" />
                  <MoonHealthMeter type="shield" value={80} max={100} label="CYBER SHIELD" />
                </Stack>

                <MoonRPGGrid
                  columns={4}
                  totalSlots={8}
                  title="TACTICAL_INVENTORY"
                  items={[
                    { id: '1', name: 'Inferno Core', count: 1, icon: <FlameIcon size={20} color="#FF4D00" /> },
                    { id: '2', name: 'Energy Cell', count: 4, icon: <ZapIcon size={20} color="#FFD700" /> },
                    { id: '3', name: 'Reboot Protocol', count: 1, icon: <RefreshIcon size={20} color="#00FF66" /> },
                  ]}
                />
              </Grid>

              <MoonConsoleLogger
                title="SYSTEM_TELEMETRY_STREAM"
                logs={[
                  { timestamp: '23:55:01', type: 'info', message: 'Tactical HUD initialized.' },
                  { timestamp: '23:55:04', type: 'success', message: 'Shield matrix locked at 80% capacity.' },
                ]}
              />
            </Stack>

            <CodeBlock filename="RPGGameHUD.recipe.tsx" code={`import { MoonTypewriterDialogue, MoonHealthMeter, MoonRPGGrid, MoonConsoleLogger } from '@moon-inferno/react';\n\nexport const RPGGameHUD = () => (\n  <Stack gap="1.5rem">\n    <MoonTypewriterDialogue speaker="COMMANDER" text="Subsystems operational." />\n    <MoonHealthMeter type="health" value={92} />\n    <MoonRPGGrid items={[{ id: '1', name: 'Inferno Core' }]} />\n    <MoonConsoleLogger logs={[{ type: 'success', message: 'Shield locked' }]} />\n  </Stack>\n);`} />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
