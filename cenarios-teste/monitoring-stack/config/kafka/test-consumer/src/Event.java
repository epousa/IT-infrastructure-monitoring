import java.lang.Thread.Builder;
import java.util.ArrayList;
import java.util.List;

public class Event {
    private static final String[] SEVERITIES = {"Indeterminate", "Cleared", "Normal", "Warning", "Minor", "Major", "Critical"};
    private static final int DEFAULT_PORT = 5817;
    private static final String SOURCE = "";

    private String uei;
    private String descr;
    private String logmsg;
    private String interfaceAddr;
    private int ifIndex;
    private int nodeId;
    private String service;
    private int severity;
    private String source;
    private String uuid;
    private boolean verbose;
    private String zone;
    private String operInstr;
    private List<String> parms = new ArrayList<>();

    public Event(String uei,String descr,String logmsg,String interfaceAddr, int ifIndex, int nodeId, String service, int severity, String source,String uuid,boolean verbose,String zone,String operInstr,List<String> parms){
		this.uei = uei;
        this.descr = descr;
        this.logmsg = logmsg;
        this.interfaceAddr = interfaceAddr;
        this.ifIndex = ifIndex;
        this.nodeId = nodeId;
        this.service = service;
        this.severity = severity;
        this.source = source;
        this.uuid = uuid;
        this.verbose = verbose;
        this.zone = zone;
        this.operInstr = operInstr;
        this.parms = parms;

        //parseHostTo(hostTo);
        // this.severity = severity; // default to "Normal" severity
        // this.source = SOURCE;
        // this.zone = "GMT";
	}

    
    public void setDescr(String descr) {
        this.descr = descr;
    }

    public void setLogmsg(String logmsg) {
        this.logmsg = logmsg;
    }

    public void setInterfaceAddr(String interfaceAddr) {
        this.interfaceAddr = interfaceAddr;
    }

    public void setIfIndex(int ifIndex) {
        this.ifIndex = ifIndex;
    }

    public void setNodeId(int nodeId) {
        this.nodeId = nodeId;
    }

    public void setService(String service) {
        this.service = service;
    }

    public void setSeverity(int severity) {
        this.severity = severity;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public void setVerbose(boolean verbose) {
        this.verbose = verbose;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public void setOperInstr(String operInstr) {
        this.operInstr = operInstr;
    }

    public void addParm(String parm) {
        this.parms.add(parm);
    }
}
