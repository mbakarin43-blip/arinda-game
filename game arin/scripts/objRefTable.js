const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Camera3D,
		C3.Behaviors.Bullet,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.ConsoleGroupEnd,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Cnds.CompareY
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{"3DCamera": 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Bullet: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite10: 0},
	{Audio: 0},
	{Mouse: 0},
	{Touch: 0},
	{Browser: 0},
	{Text: 0},
	{score1: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Text: class extends self.ITextInstance {}
}