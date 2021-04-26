<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1614694353137" ID="ID_318483112" MODIFIED="1615476126209" STYLE="bubble" TEXT="Word chain app">
<font BOLD="true" NAME="SansSerif" SIZE="20"/>
<node CREATED="1615475858997" ID="ID_1370775208" MODIFIED="1615476740337" POSITION="right" TEXT="First steps">
<font NAME="SansSerif" SIZE="16"/>
<icon BUILTIN="full-1"/>
<node CREATED="1615475956246" HGAP="69" ID="ID_964289752" MODIFIED="1615479024822" TEXT="Player1 inputs a word" VSHIFT="-81">
<font NAME="SansSerif" SIZE="16"/>
<icon BUILTIN="edit"/>
<icon BUILTIN="full-2"/>
<node CREATED="1615476179115" HGAP="41" ID="ID_1848870662" MODIFIED="1615478786493" TEXT="Word satisfies the game conditions" VSHIFT="-37">
<font NAME="SansSerif" SIZE="16"/>
<icon BUILTIN="button_ok"/>
<node CREATED="1615476294788" HGAP="48" ID="ID_1445011308" MODIFIED="1615476347094" TEXT="This word gets added to the array of used words for that player" VSHIFT="-32">
<font NAME="SansSerif" SIZE="16"/>
</node>
<node CREATED="1615476839980" HGAP="70" ID="ID_1280080613" MODIFIED="1615478786498" TEXT="Player1 is added one point for each letter in the word" VSHIFT="-17">
<font NAME="SansSerif" SIZE="16"/>
<node CREATED="1615478537010" ID="ID_349703100" MODIFIED="1615478786500" TEXT="If the number of points is at or above threshold">
<node CREATED="1615478578867" ID="ID_876832765" MODIFIED="1615478897237" TEXT="Player1 wins!">
<icon BUILTIN="bookmark"/>
</node>
</node>
<node CREATED="1615478559656" ID="ID_1554525309" MODIFIED="1615478786502" TEXT="If the number of points is below threshold">
<node CREATED="1615478598082" ID="ID_1826294085" MODIFIED="1615479057678" TEXT="Set player2 as &apos;active-player&apos; instead - return to 2"/>
</node>
</node>
</node>
<node CREATED="1615476231300" HGAP="39" ID="ID_1374479806" MODIFIED="1615478786504" TEXT="Word doesn&apos;t satisfy the game conditions" VSHIFT="43">
<font NAME="SansSerif" SIZE="16"/>
<icon BUILTIN="button_cancel"/>
<node CREATED="1615476462573" HGAP="86" ID="ID_1412011226" MODIFIED="1615476490020" TEXT="Return error alert" VSHIFT="-18">
<font NAME="SansSerif" SIZE="16"/>
</node>
</node>
</node>
<node CREATED="1615476745307" HGAP="76" ID="ID_852257071" MODIFIED="1615479032208" TEXT="New game">
<font NAME="SansSerif" SIZE="16"/>
<icon BUILTIN="stop-sign"/>
<icon BUILTIN="full-3"/>
<node CREATED="1615476773237" HGAP="108" ID="ID_997048634" MODIFIED="1615476795439" TEXT="Delete both arrays with used words" VSHIFT="-46">
<font NAME="SansSerif" SIZE="16"/>
</node>
<node CREATED="1615476813068" HGAP="100" ID="ID_285617654" MODIFIED="1615476828089" TEXT="Reset the score of both players to 0" VSHIFT="24">
<font NAME="SansSerif" SIZE="16"/>
</node>
</node>
</node>
</node>
</map>
